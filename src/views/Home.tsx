import styled from 'styled-components';
import RangeSlider from '../components/RangeSlider';
import Card from '../components/Card';
import { useGetBodiesCount } from '../services/JPL_SmallBodyAPI';
import DataTable from '../components/DataTable';
import RangeProvider from '../context/RangeContext';

const HomeContainer = styled.main`
  text-align: center;
  margin: 0;
  padding-top: 20px;
  width: 100%;
`;

const Subheader = styled.p`
  color: var(--color-text-secondary);
  margin: 0 0 5px 0;
`;

function Home() {
  const { bodiesLoading, bodiesData } = useGetBodiesCount();

  return (
    <HomeContainer>
      <h1>Welcome to Sol</h1>
      <p>
        It sure is a busy system out there! Planning on a trip from one gravity
        well to another? Select an area of the system to see all currently
        tagged small travellers.
      </p>

      {/* <BodyPicker /> */}
      <Card>
        <h3>Small Body Query Interface</h3>
        {bodiesData && (
          <Subheader>
            Total solar bodies:{' '}
            <span className="highlight">{bodiesData.count}</span>
          </Subheader>
        )}

        {bodiesLoading && (
          <Subheader>Counting current solar bodies...</Subheader>
        )}

        <RangeProvider>
          <RangeSlider />
          <DataTable />
        </RangeProvider>
      </Card>
    </HomeContainer>
  );
}

export default Home;
