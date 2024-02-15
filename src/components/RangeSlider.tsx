import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import { PlanetaryDistances } from '../data/distances';

const SliderWrapper = styled.div`
  display: block;
  position: relative;
  padding: 30px 0px 30px;
`;

const HeaderSection = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 13px;
`;

function RangeSlider() {
  const [view, setview] = useState<'sol' | 'inner' | 'belt'>('inner');

  const plantaryList =
    view === 'sol'
      ? PlanetaryDistances
      : view === 'inner'
      ? PlanetaryDistances.slice(0, 4)
      : PlanetaryDistances.slice(2, 6);

  const stepDistance = view === 'sol' ? 0.1 : 0.01;

  function generatePlanetMarks() {
    return plantaryList.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.distance]: { label: curr.name },
      }),
      {}
    );
  }

  function handleRangeChange(values: number | number[]) {
    console.log('change complete');
    console.log(values);
  }

  function handleChangeView(view: 'sol' | 'inner' | 'belt') {
    console.log('view change');
    setview(view);
  }

  return (
    <SliderWrapper>
      <HeaderSection>
        Quick View:
        <Button
          isActive={view === 'inner'}
          handleOnClick={() => {
            handleChangeView('inner');
          }}
        >
          Inner Planets
        </Button>
        <Button
          isActive={view === 'belt'}
          handleOnClick={() => {
            handleChangeView('belt');
          }}
        >
          The Belt
        </Button>
        <Button disabled={true}>Jovian Orbit (coming soon)</Button>
        <Button
          isActive={view === 'sol'}
          handleOnClick={() => {
            handleChangeView('sol');
          }}
        >
          Sol System
        </Button>
      </HeaderSection>
      <Slider
        range
        min={plantaryList[0].distance - 0.38}
        max={plantaryList[plantaryList.length - 1].distance + 0.38}
        step={stepDistance}
        styles={{
          rail: { backgroundColor: 'var(--color-grey-600)' },
          track: {
            backgroundImage:
              'linear-gradient(90deg,#2c47e0,#ce0cf0 40%,#ce0cf0 60%,#2c47e0',
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
        }}
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
