import * as React from 'react';
import {
  Container,
  Stack,
  Box,
  TextField,
  Typography,
  Grid,
  InputAdornment,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Card,
  Avatar
} from '@mui/material';
import { useGetGithubSearchQuery } from '../../react-query/queries/searchQuery';
import * as _ from 'lodash';
import { LoaderContext } from '../../context/loader/Loader';
import './Search.styles.scss';
import { UserData, URLResponse } from './Search.types';
import NotFound from '../NotFound/NotFound';
import PaginationComponent from '../PaginationComponent/PaginationComponent';
import { Routing } from '../../utils/paths';
import { useSnakeBar } from '../../context/SnakeBar/SnakeBar';
import SearchResults from '../SearchResults/SearchResults';
import SearchTool from '../SearchTool/SearchTool';

const Search = () => {
  const regex = /(\w+)\s+type:(\w+)/;
  const queryParams = new URLSearchParams(window.location.search);
  const searchText = _.get(queryParams.get('q')?.match(regex), '[1]', null) || '';
  const searchType = _.get(queryParams.get('q')?.match(regex), '[2]', null) || '';
  const searchPageLimit = queryParams.get('per_page');
  const searchPage = queryParams.get('page') || '1';
  const [searchData, setSearchData] = React.useState<URLResponse | null | void>(null);
  const context = React.useContext(LoaderContext);
  const { isLoading, data, isError, isSuccess } = useGetGithubSearchQuery(searchType, searchText, searchPage);
  const { handleErrorSnakeBar } = useSnakeBar();
  const { searchRoute } = Routing();

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    searchRoute(searchType, searchText, value);
  }

  React.useEffect(() => {
    context?.setLoaderVisibility(true)
  }, [isLoading])

  React.useEffect(() => {
    context?.setLoaderVisibility(false)
    if (isSuccess && data !== undefined) {
      setSearchData(data.data);
    }
  }, [isSuccess, isError])

  React.useEffect(()=>{
    if(isError){
      handleErrorSnakeBar('Something went wrong !!')
    }
  }, [isError])
  return (
    <Container className='search-container'>
      <Stack>
        <Box>
          <SearchTool 
            searchText={searchText}
            searchType={searchType}
          />
        </Box>
        <Box>
          <SearchResults 
            searchData = {searchData}
          />
        </Box>
        <Box className='search-pagination'>
          <PaginationComponent
            results={searchData?.total_count || 0}
            page={Number(searchPage)}
            handlePageChange={handlePageChange}
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default Search;