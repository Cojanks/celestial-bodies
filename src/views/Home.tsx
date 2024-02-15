import styled from 'styled-components';
import RangeSlider from '../components/RangeSlider';
import Card from '../components/Card';
import { useGetBodies } from '../services/openSystemAPI';

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
  const { bodiesLoading, bodiesData, bodiesError } = useGetBodies();

  console.log(bodiesLoading);
  console.log(bodiesData);
  console.log(bodiesError);

  // if (bodiesLoading) return <div>loading...</div>;
  // if (bodiesError) return <div>error</div>;

  return (
    <HomeContainer>
      <h1>Welcome to Sol</h1>
      <p>
        It sure is a busy system out there! Planning on a trip from one gravity
        well to another? Check your route here to see a list of currently tagged
        small travellers are also out there and plan accordingly.
      </p>

      {/* <BodyPicker /> */}
      <Card>
        <h3>Small Body Query Interface</h3>
        <Subheader>Would you like to know more?</Subheader>
        <RangeSlider />
      </Card>
    </HomeContainer>
  );
}

export default Home;
