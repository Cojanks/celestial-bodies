import styled from 'styled-components';
import RangeSlider from '../components/RangeSlider';

const HomeContainer = styled.main`
  text-align: center;
  margin: 0;
  padding-top: 20px;
  width: 100%;
`;

function Home() {
  // const { bodiesLoading, bodiesData, bodiesError } = useGetBodies();

  // console.log(bodiesLoading);
  // console.log(bodiesData);
  // console.log(bodiesError);

  // if (bodiesLoading) return <div>loading...</div>;
  // if (bodiesError) return <div>error</div>;

  return (
    <HomeContainer>
      <h1>Welcome to Sol</h1>
      {/* <BodyPicker /> */}
      <RangeSlider />
    </HomeContainer>
  );
}

export default Home;
