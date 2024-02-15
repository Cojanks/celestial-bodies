import { useState } from 'react';
import { BodyType } from '../types/types';
import LargeSquareButton from './Button';

const bodyTypes: BodyType[] = [
  'Planet',
  'Dwarf Planet',
  'Moon',
  'Asteroid',
  'Comet',
];

function BodyPicker() {
  const [activeBody, setactiveBody] = useState<BodyType>();

  function handleBodySelect(body: BodyType) {
    console.log(body);

    setactiveBody(body);
  }

  return (
    <div>
      <h2>Please select a Classification:</h2>
      {bodyTypes.map((body, i) => (
        <LargeSquareButton
          key={i}
          isActive={activeBody === body}
          handleOnClick={() => {
            handleBodySelect(body);
          }}
        >
          {body}
        </LargeSquareButton>
      ))}
    </div>
  );
}

export default BodyPicker;
