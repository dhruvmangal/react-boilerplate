import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import UserDescription from '../UserDescription/UserDescription';
import UserCard from '../UserCard/UserCard';
import { SEARCH_RESULTS } from '../../utils/constants';
import type { URLResponse, UserData } from '../Search/Search.types';
import './SearchResults.styles.scss';

interface SearchResultsType {
  searchData: URLResponse | null | void
}

const initalUserData = {
  avatar_url: '',
  id: 0,
  login: '',
  organizations_url: '',
  type: '',
  url: ''
}

const SearchResults = (props: SearchResultsType) => {
  const { searchData } = props;
  const [selectedUser, setSelectedUser] = React.useState<UserData>(initalUserData);

  const clearSelected = () => {
    setSelectedUser(initalUserData)
  }

  return (
    <Box className='search-results'>
      <hr />
      <Typography variant='h6' className='search-results-text'>
        {SEARCH_RESULTS}
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          {
            searchData?.items?.map((user: UserData) => {
              return (
                <UserCard
                  user={user}
                  setSelectedUser={setSelectedUser}
                />
              )
            })
          }
        </Grid>
        <Grid item xs={6}>
          {
            selectedUser.login !== '' &&
            <UserDescription
              userDetail={selectedUser}
              clearSelected={clearSelected}
            />
          }
        </Grid>
      </Grid>
    </Box>
  )
}

export default SearchResults;