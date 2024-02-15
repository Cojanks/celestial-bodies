import { useQuery } from '@tanstack/react-query';

export function useGetBodies() {
  const {
    isLoading: bodiesLoading,
    data: bodiesData,
    error: bodiesError,
  } = useQuery({
    queryKey: ['bodies'],
    queryFn: getBodies,
  });

  return {
    bodiesLoading,
    bodiesData,
    bodiesError,
  };
}

async function getBodies() {
  const response = await fetch(
    'https://api.le-systeme-solaire.net/rest/bodies/'
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = response.json();
  return data;
}
