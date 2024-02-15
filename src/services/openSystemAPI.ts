import { useQuery } from '@tanstack/react-query';
import { JPL_API_URL } from '../types/constant';

export function useGetBodiesCount() {
  const {
    isLoading: bodiesLoading,
    data: bodiesData,
    error: bodiesError,
  } = useQuery({
    queryKey: ['bodies'],
    queryFn: TEMPgetTotalBodies,
  });

  return {
    bodiesLoading,
    bodiesData,
    bodiesError,
  };
}

async function getTotalBodies() {
  const response = await fetch(JPL_API_URL, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = response.json();
  return data;
}

// TODO: move to use real API
function TEMPgetTotalBodies() {
  return {
    signature: {
      source: 'NASA/JPL SBDB (Small-Body DataBase) Query API',
      version: '1.0',
    },
    count: 1353312,
  };
}
