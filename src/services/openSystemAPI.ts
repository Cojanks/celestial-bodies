import { useQuery } from '@tanstack/react-query';
import { JPL_API_QUERY, JPL_API_URL } from '../types/constant';

export function useGetBodiesCount() {
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

// ------------------------------------

export function useGetBodiesInRange(classificationStr: string) {
  const {
    isLoading: rangedBodiesLoading,
    data: rangedBodiesData,
    error: rangedBodiesError,
  } = useQuery({
    queryKey: ['ranged-bodies'],
    queryFn: async () => {
      const response = await fetch(`${JPL_API_QUERY + classificationStr}`, {
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
    },
  });

  return {
    rangedBodiesLoading,
    rangedBodiesData,
    rangedBodiesError,
  };
}

async function getRangedBodies(classificationStr: string) {
  const response = await fetch(`${JPL_API_QUERY + classificationStr}`, {
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
