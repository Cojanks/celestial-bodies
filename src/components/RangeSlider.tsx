import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import { PlanetaryDistances } from '../data/distances';
import Planet from './Planet';

const SliderWrapper = styled.div`
  display: block;
  position: relative;
  padding: 30px 0px 30px;
  margin-bottom: 50px;
`;

const HeaderSection = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 13px;
`;

const Whisper = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.8rem;
`;

const sliderCustomStyles = {
  rail: { backgroundColor: 'var(--color-grey-600)' },
  track: {
    backgroundImage:
      'linear-gradient(90deg,#2c47e0,#ce0cf0 40%,#ce0cf0 60%,#2c47e0',
    backgroundSize: '400% 400%',
    animation: 'gradient 10s ease infinite',
  },
  handle: {
    borderRadius: '0px',
    border: 'none',
    height: '60px',
    margin: '-25px 0 0 0',
    backgroundImage:
      'linear-gradient(90deg,rgba(2, 30, 191, 0.0) 36%,#2c47e0 46%, #2c47e0 54%, rgba(2, 30, 191, 0.0) 64%',
    backgroundColor: 'transparent',
  },
};

function RangeSlider() {
  const [view, setview] = useState<'sol' | 'inner' | 'belt'>('inner');

  // Recalculate what planets to show, step values, etc.
  const plantaryList =
    view === 'sol'
      ? PlanetaryDistances
      : view === 'inner'
      ? PlanetaryDistances.slice(0, 4)
      : PlanetaryDistances.slice(2, 6);
  const stepDistance = view === 'sol' ? 0.1 : 0.01;
  const startingValues =
    view === 'sol' ? [1.2, 4] : view === 'inner' ? [0.7, 1.3] : [1.6, 5];

  // Generate the marks obj that is used in the slider
  function generatePlanetMarks() {
    return plantaryList.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.distance]: { label: <Planet name={curr.name} /> },
      }),
      {}
    );
  }

  // Events
  function handleRangeChange(values: number | number[]) {
    console.log('change complete');
    console.log(values);
  }

  return (
    <SliderWrapper>
      <HeaderSection>
        Quick View:
        <Button
          isActive={view === 'inner'}
          handleOnClick={() => {
            setview('inner');
          }}
        >
          Inner Planets
        </Button>
        <Button
          isActive={view === 'belt'}
          handleOnClick={() => {
            setview('belt');
          }}
        >
          The Belt
        </Button>
        <Button disabled={true}>Jovian Orbit (coming soon)</Button>
        <Button
          isActive={view === 'sol'}
          handleOnClick={() => {
            setview('sol');
          }}
        >
          Sol System
        </Button>
      </HeaderSection>
      <Whisper>&lt;-- Sunward </Whisper>
      <Slider
        range
        defaultValue={startingValues}
        min={plantaryList[0].distance - 0.38}
        max={plantaryList[plantaryList.length - 1].distance + 0.38}
        step={stepDistance}
        styles={sliderCustomStyles}
        dotStyle={{
          backgroundColor: 'var(--color-grey-400)',
          border: '1px solid var(--color-grey-500)',
        }}
        marks={generatePlanetMarks()}
        onChangeComplete={handleRangeChange}
      />
    </SliderWrapper>
  );
}

export default RangeSlider;
