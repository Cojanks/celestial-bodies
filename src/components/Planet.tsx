import styled from 'styled-components';

type PlanetType = {
  name: string;
};

// const position = [
//   'Mercury',
//   'Venus',
//   'Earth',
//   'Mars',
//   'Astroid Belt',
//   'Jupiter',
//   'Saturn',
//   'Uranus',
//   'Neptune',
// ];

const PlanetWrapper = styled.div``;

const PlanetGraphic = styled.div`
  border-radius: 50%;
  margin: 14px auto 5px;

  &.mercury {
    height: 10px;
    width: 10px;
    background-color: #7272a3;
  }
  &.venus {
    height: 16px;
    width: 16px;
    background-color: #ff8800;
  }
  &.earth {
    height: 15px;
    width: 15px;
    background-color: #577614;
  }
  &.mars {
    height: 13px;
    width: 13px;
    background-color: #ff3700;
  }
  &.asteroid-belt {
  }
  &.jupiter {
    height: 40px;
    width: 40px;
    background-color: #f9cdb5;
  }
  &.saturn {
    height: 30px;
    width: 30px;
    background-color: #f6eace;
  }
  &.uranus {
    height: 25px;
    width: 25px;
    background-color: #9797f9;
  }
  &.neptune {
    height: 24px;
    width: 24px;
    background-color: #3c3cb1;
  }
`;

const PlanetName = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.8rem;
`;

function Planet({ name }: PlanetType) {
  return (
    <PlanetWrapper>
      <PlanetGraphic className={name.replace(' ', '-').toLowerCase()} />
      <PlanetName>{name}</PlanetName>
    </PlanetWrapper>
  );
}

export default Planet;
