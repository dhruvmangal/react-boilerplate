import * as React from 'react';
import { Routes, Route, Navigate, } from 'react-router-dom';
import RouteList from './RouteList';
import type { RouteListType } from './routes.types';

const AppRoutes: React.FC = (): JSX.Element => {

  const renderRoutes = (RouteList: RouteListType[]) => {
    return RouteList.map((item) => {
      if (item?.children !== undefined) {
        return (
        <Route
          path={item.path}
          element={<item.component />}
          key={item.path}
        >
          {renderRoutes(item?.children)}
        </Route>)
      } else {
        return (
          <Route
            path={item.path}
            element={<item.component />}
            key={item.path}
          />
        )
      }
    })
  }

  return (
    <Routes>
      {
        renderRoutes(RouteList)
      }
      {/* <Route path='*' element={<PageNotFound />} /> */}
    </Routes>
  )
}

export default AppRoutes;