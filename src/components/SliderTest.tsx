import styled from 'styled-components';

const handleDotDimension = 10;
const handleWidth = 2;
const sliderHeight = 2;

const SliderContainer = styled.div`
  margin: 5px 20px;
  position: relative;
`;

const SliderRail = styled.div`
  width: 100%;
  height: ${sliderHeight + 'px'};
  position: absolute;
  background-color: var(--color-grey-600);
  border-radius: 2px;
`;

const SliderTrack = styled.div``;
const SliderHandleLeft = styled.div`
  position: absolute;
  width: ${handleWidth + 'px'};
  height: 30px;

  background-color: var(--color-grey-600);

  bottom: 0;

  &:before {
    content: '';
    position: absolute;
    height: ${handleDotDimension + 'px'};
    width: ${handleDotDimension + 'px'};
    background-color: var(--color-background);
    border: 1px solid var(--color-grey-600);
    border-radius: 50%;
    bottom: ${'-' + (handleDotDimension / 2 + sliderHeight) + 'px'};
    left: ${'-' + handleDotDimension / 2 + 'px'};
  }
`;
// const SliderHandleRight = styled.div`
//   position: absolute;
//   width: 3px;
//   height: 10px;
//   background-color: white;
// `;

function SliderTest() {
  return (
    <SliderContainer>
      <SliderRail />
      <SliderTrack />
      <SliderHandleLeft
        tabIndex={0}
        role={'slider'}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={30}
        aria-disabled={'false'}
        aria-orientation={'horizontal'}
        onChange={() => {
          console.log('onchange');
        }}
      />
      {/* <SliderHandleRight /> */}
    </SliderContainer>
  );
}

export default SliderTest;
