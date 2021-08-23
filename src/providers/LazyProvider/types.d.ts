import { ReactChild } from 'react';

export interface LazyProviderProps {
  fallback: ReactChild,
  pathCompRecord: Record<string, JSX.Element>
}