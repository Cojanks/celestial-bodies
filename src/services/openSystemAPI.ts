import { useQuery } from '@tanstack/react-query';
import { JPL_API_Key, JPL_API_URL } from '../types/constant';

export function useGetBodies() {
  const {
    isLoading: bodiesLoading,
    data: bodiesData,
    error: bodiesError,
  } = useQuery({
    queryKey: ['bodies'],
    queryFn: getTotalBodies,
  });

  return {
    bodiesLoading,
    bodiesData,
    bodiesError,
  };
}

async function getTotalBodies() {
  const response = await fetch(JPL_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      api_key: JPL_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = response.json();
  return data;
}
