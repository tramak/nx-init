import { useMemo } from 'react';
import { useAppSelector } from './useAppSelector';
import { getRequest } from '../selectors';

export const useRequest = (name: string, id?: string) => {
  const selector = useMemo(() => {
    return getRequest(name, id);
  }, [name, id]);

  return useAppSelector(selector);
};
