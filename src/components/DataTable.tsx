import { ConfigProvider, Table, theme } from 'antd';
import type { TableProps } from 'antd';
import { OrbitClassifications } from '../data/distances';
import { useRangeContext } from '../context/RangeContext';
import { useGetBodiesInRange } from '../services/JPL_SmallBodyAPI';
import Loader from './Loader';
import styled from 'styled-components';

type RawData = [number, ...string[]][];

interface DataType {
  key: number;
  bodyName: string;
  classification: string;
  neo: string;
  pha: string;
  moid: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'bodyName',
    key: 'bodyName',
  },
  {
    title: 'Orbit Classification',
    dataIndex: 'classification',
    key: 'classification',
  },
  {
    title: 'Near Earth Object',
    dataIndex: 'neo',
    key: 'neo',
  },
  {
    title: 'Potentially Hazardous Astroid',
    dataIndex: 'pha',
    key: 'pha',
  },
  {
    title: 'Closest approach to Earth (au)',
    dataIndex: 'moid',
    key: 'moid',
  },
];

function convertToDataForTable(data: RawData) {
  const formattedData: DataType[] = data.map((item) => ({
    key: item[0],
    bodyName: item[1],
    classification: item[2],
    neo: item[3],
    pha: item[4],
    moid: item[5],
  }));

  return formattedData;
}

function getOrbitClassifications(range: number[]) {
  const classArr = OrbitClassifications.filter(
    (item) => item.range[1] >= range[0] && range[1] >= item.range[0],
    []
  );
  const derp: string[] = classArr.map((item) => item.class);

  return derp;
}

const TableWrapper = styled.div`
  margin-top: 60px;
`;

function DataTable() {
  const { range } = useRangeContext();
  const { darkAlgorithm } = theme;

  const { rangedBodiesLoading, rangedBodiesData } = useGetBodiesInRange(
    getOrbitClassifications(range).join(',')
  );

  if (rangedBodiesLoading) return <Loader numBars={6} type={'fit'} />;

  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}
    >
      {rangedBodiesData && (
        <TableWrapper>
          <Table
            columns={columns}
            dataSource={convertToDataForTable(rangedBodiesData.data)}
            size="small"
          />
        </TableWrapper>
      )}
    </ConfigProvider>
  );
}

export default DataTable;
