import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyProviderProps } from '~/providers/LazyProvider/types';

const LazyProvider = ({ fallback, pathCompRecord }: LazyProviderProps) => {
  return (
    <Suspense fallback={fallback} >
      <Switch>
        {Object.entries(pathCompRecord).map(
          (([path, element]) => (
            <Route key={path} path={path}>
              {element}
            </Route>
          )),
        )}
      </Switch>
    </Suspense>
  );
};

export default LazyProvider;