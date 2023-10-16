import * as React from 'react';
import {
  Container,
  Stack,
  TextField,
  Typography,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { APP_NAME, SEARCH } from '../../utils/constants';
import { Routing } from '../../utils/paths';
import './Home.styles.scss';

const initalData = {
  searchText: '',
  searchType: 'users'
}

const Home = () => {
  const [searchFields, setSearchFields] = React.useState(initalData)
  const { searchRoute } = Routing();
  const handleSearch = (event: any) => {
    setSearchFields({
      ...searchFields,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    searchRoute(searchFields.searchType, searchFields.searchText)
  }

  return (
    <Container className='container'>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography variant='h2'>
            {APP_NAME}
          </Typography>
          <TextField
            id='outlined-basic'
            label='Search'
            variant='outlined'
            value={searchFields.searchText}
            onChange={handleSearch}
            name='searchText'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }} />
          <RadioGroup row>
            <FormControlLabel
              value='users'
              control={<Radio />}
              label='Users'
              name='searchType'
              onChange={handleSearch}
            />
            <FormControlLabel
              value='organization'
              control={<Radio />}
              label='Organizations'
              name='searchType'
              onChange={handleSearch}
            />
          </RadioGroup>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant='outlined' className='button'> Clear</Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant='contained'
                className='button'
                type='submit'
              >
                {SEARCH}
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </form>
    </Container>
  )
}

export default Home;