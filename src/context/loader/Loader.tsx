import { CircularProgress, Box } from '@mui/material';
import * as React from 'react';
import './Loader.styles.scss';
import type { LoaderProps } from './Loader.types';

const LoaderContext = React.createContext<LoaderProps |null>(null);

const Loader = (props:any) => {
  const [loaderVisibility, setLoaderVisibility] = React.useState(false);

  return (
    <LoaderContext.Provider value={{ setLoaderVisibility}}>
      {loaderVisibility && 
        <div className='loader-container'>
          <Box className='loader'>
            <CircularProgress />
          </Box>
        </div>
      }
      {props.children}
    </LoaderContext.Provider>
  )
}

const useLoader = () => {
  const loaderContext = React.useContext(LoaderContext);
  if(loaderContext === null){
    throw new Error('useLoader: Out of Scope')
  }
  return loaderContext;
}

export {Loader, useLoader, LoaderContext};