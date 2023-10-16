import * as React from 'react';
import { Box, Pagination } from '@mui/material';
import { Routing } from '../../utils/paths';

interface PaginationType {
  results: number,
  page: number,
  handlePageChange: (e: React.ChangeEvent<unknown>, value: number) => void
}

const PaginationComponent = (props: PaginationType) => {
  const { results, page, handlePageChange } = props;
  const noOfPages = Math.ceil(results / 10)

  return (
    <Box >
      <Pagination
        style={{alignSelf: 'center'}}
        className='search-pagination'
        count={noOfPages}
        page={page}
        variant='outlined'
        onChange={handlePageChange}
      />
    </Box>
  )
}

export default PaginationComponent;