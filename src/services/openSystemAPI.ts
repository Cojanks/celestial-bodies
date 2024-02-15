import { useQuery } from '@tanstack/react-query';
import { JPL_API_QUERY, JPL_API_URL } from '../types/constant';

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

// ------------------------------------

export function useGetBodiesInRange(classificationStr: string) {
  // console.log('useGetBodiesInRange');
  // console.log(classificationStr);
  const {
    isLoading: rangedBodiesLoading,
    data: rangedBodiesData,
    error: rangedBodiesError,
  } = useQuery({
    queryKey: ['ranged-bodies'],
    // queryFn: async () => {
    //   const response = await fetch(`${JPL_API_QUERY + classificationStr}`, {
    //     mode: 'cors',
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const data = response.json();
    //   return data;
    // },
    queryFn: TEMPgetRangedBodies,
  });

  return {
    rangedBodiesLoading,
    rangedBodiesData,
    rangedBodiesError,
  };
}

async function getRangedBodies() {}

async function TEMPgetRangedBodies() {
  console.log('TEMPgetRangedBodies');

  return {
    signature: {
      source: 'NASA/JPL SBDB (Small-Body DataBase) Query API',
      version: '1.0',
    },
    fields: ['spkid', 'full_name', 'class', 'neo', 'pha', 'moid'],
    data: [
      [20002062, '  2062 Aten (1976 AA)', 'ATE', 'Y', 'N', '0.112'],
      [20002100, '  2100 Ra-Shalom (1978 RA)', 'ATE', 'Y', 'N', '0.15'],
      [20002340, '  2340 Hathor (1976 UA)', 'ATE', 'Y', 'Y', '0.00662'],
      [20003362, '  3362 Khufu (1984 QA)', 'ATE', 'Y', 'Y', '0.0133'],
      [20003554, '  3554 Amun (1986 EB)', 'ATE', 'Y', 'N', '0.25'],
      [20003753, '  3753 Cruithne (1986 TO)', 'ATE', 'Y', 'N', '0.0707'],
      [20005381, '  5381 Sekhmet (1991 JY)', 'ATE', 'Y', 'N', '0.112'],
      [20005590, '  5590 (1990 VA)', 'ATE', 'Y', 'N', '0.121'],
      [20005604, '  5604 (1992 FE)', 'ATE', 'Y', 'Y', '0.034'],
      [20033342, ' 33342 (1998 WT24)', 'ATE', 'Y', 'Y', '0.01'],
      [20065679, ' 65679 (1989 UQ)', 'ATE', 'Y', 'Y', '0.014'],
      [20066063, ' 66063 (1998 RO1)', 'ATE', 'Y', 'N', '0.0923'],
      [20066146, ' 66146 (1998 TU3)', 'ATE', 'Y', 'N', '0.0735'],
      [20066391, ' 66391 Moshup (1999 KW4)', 'ATE', 'Y', 'Y', '0.0125'],
      [20066400, ' 66400 (1999 LT7)', 'ATE', 'Y', 'N', '0.059'],
      [20068347, ' 68347 (2001 KB67)', 'ATE', 'Y', 'Y', '0.0148'],
      [20085770, ' 85770 (1998 UP1)', 'ATE', 'Y', 'N', '0.0838'],
      [20085953, ' 85953 (1999 FK21)', 'ATE', 'Y', 'N', '0.0706'],
      [20085989, ' 85989 (1999 JD6)', 'ATE', 'Y', 'Y', '0.0479'],
      [20086450, ' 86450 (2000 CK33)', 'ATE', 'Y', 'N', '0.125'],
    ],
    count: 266,
  };
}
