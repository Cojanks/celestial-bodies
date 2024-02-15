export const PlanetaryDistances = [
  { name: 'Mercury', distance: 0.38 },
  { name: 'Venus', distance: 0.72 },
  { name: 'Earth', distance: 1 },
  { name: 'Mars', distance: 1.52 },
  { name: 'Astroid Belt', distance: 2.7 },
  { name: 'Jupiter', distance: 5.2 },
  { name: 'Saturn', distance: 9.58 },
  { name: 'Uranus', distance: 19.14 },
  { name: 'Neptune', distance: 30.2 },
];

export const OrbitClassifications = [
  {
    class: 'IEO',
    name: 'Atira',
    desc: 'An asteroid orbit contained entirely within the orbit of the Earth (Q < 0.983 au). Also known as an Interior Earth Object',
    range: [0, 0.983],
  },
  {
    class: 'ATE',
    name: 'Aten',
    desc: 'Near-Earth asteroid orbits similar to that of 2062 Aten (a < 1.0 au; Q > 0.983 au)',
    range: [0.983, 1],
  },
  {
    class: 'APO',
    name: 'Apollo',
    desc: 'Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo (a > 1.0 au; q < 1.017 au)',
    range: [1, 1.02],
  },
  {
    class: 'AMO',
    name: 'Amor',
    desc: 'Near-Earth asteroid orbits similar to that of 1221 Amor (1.017 au < q < 1.3 au)',
    range: [1.02, 1.3],
  },
  {
    class: 'MCA',
    name: 'Mars-crossing Asteroid',
    desc: 'Asteroids that cross the orbit of Mars constrained by (1.3 au < q < 1.666 au; a < 3.2 au)',
    range: [1.3, 1.66],
  },
  {
    class: 'IMB',
    name: 'Inner Main-belt Asteroid',
    desc: 'Asteroids with orbital elements constrained by (a < 2.0 au; q > 1.666 au)',
    range: [1.66, 2],
  },
  {
    class: 'MBA',
    name: '	Main-belt Asteroid',
    desc: '	Asteroids with orbital elements constrained by (2.0 au < a < 3.2 au; q > 1.666 au)',
    range: [2, 3.2],
  },
  {
    class: 'OMB',
    name: 'Outer Main-belt Asteroid',
    desc: 'Asteroids with orbital elements constrained by (3.2 au < a < 4.6 au)',
    range: [3.2, 4.6],
  },
  {
    class: 'TJN',
    name: 'Jupiter Trojan',
    desc: 'Asteroids trapped in Jupiter’s L4/L5 Lagrange points (4.6 au < a < 5.5 au; e < 0.3)',
    range: [4.6, 5.5],
  },
  {
    class: 'CEN',
    name: 'Centaur',
    desc: 'Objects with orbits between Jupiter and Neptune (5.5 au < a < 30.1 au)',
    range: [5.5, 30.1],
  },
];
