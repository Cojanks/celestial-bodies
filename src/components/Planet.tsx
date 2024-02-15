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

function Planet({ name }: PlanetType) {
  return <PlanetWrapper>{name}</PlanetWrapper>;
}

export default Planet;
