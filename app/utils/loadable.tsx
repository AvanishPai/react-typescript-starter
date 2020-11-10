import React, { lazy, Suspense ,ComponentType, ReactNode} from 'react';

const loadable: (
  importer: () => Promise<{ default: ComponentType<any>; }>,
  options: { fallback?: any },
) => any = (importFunc, { fallback }) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} /> 
    </Suspense>
  );
};

export default loadable;
