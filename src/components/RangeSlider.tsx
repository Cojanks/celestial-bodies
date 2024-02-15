import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function RangeSlider() {
  return (
    <Slider
      range
      defaultValue={[0, 20]}
      min={0}
      max={30.2}
      step={0.1}
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
      marks={{
        0.38: {
          label: <button>Mercury</button>,
        },
        0.77: { label: <button>Venus</button> },
        1: {
          style: { backgroundColor: 'blue' },
          label: <button>Earth</button>,
        },
        1.52: { label: <button>Mars</button> },
        2.7: { label: <button>Astroid Belt</button> },
        5.2: { label: <button>Jupiter</button> },
        9.58: { label: <button>Saturn</button> },
        19.14: { label: <button>Uranus</button> },
        30.2: { label: <button>Neptune</button> },
      }}
    />
  );
}

export default RangeSlider;
