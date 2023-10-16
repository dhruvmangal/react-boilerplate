import * as React from 'react';
import {
  Stack,
  TextField,
  Typography,
  Grid,
  InputAdornment,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button
} from '@mui/material';
import { APP_NAME } from '../../utils/constants';
import SearchIcon from '@mui/icons-material/Search';
import { SEARCH } from '../../utils/constants';
import { Routing } from '../../utils/paths';

interface SearchToolPropType {
  searchText: string,
  searchType: string
}

const SearchTool = (props: SearchToolPropType) => {
  const { searchText, searchType } = props;
  const [searchFields, setSearchFields] = React.useState({
    searchText, searchType
  });
  const { searchRoute } = Routing();

  const handleChange = (event: any) => {
    setSearchFields({
      ...searchFields,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = () => {
    searchRoute(searchFields.searchType, searchFields.searchText)
  }

  return (
    <Grid container>
      <Grid item xs={3}>
        <Typography variant='h5'>
          {APP_NAME}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TextField
            id='outlined-basic'
            label='Search'
            variant='outlined'
            value={searchFields.searchText}
            onChange={handleChange}
            name="searchText"
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <RadioGroup row>
            <FormControlLabel
              value='users'
              checked={searchFields.searchType === 'users'}
              onChange={handleChange}
              control={<Radio />}
              label='Users'
              name="searchType"
            />
            <FormControlLabel
              value='organization'
              checked={searchFields.searchType === 'organization'}
              control={<Radio />}
              label='Organizations'
              name="searchType"
              onChange={handleChange}
            />
          </RadioGroup>
        </Stack>
        <Button variant='contained' onClick={handleSubmit}>
          {SEARCH}
        </Button>
      </Grid>
    </Grid>
  )
}

export default SearchTool;