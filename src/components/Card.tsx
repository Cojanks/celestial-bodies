import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type CardType = {
  alignment?: 'left' | 'center' | 'right';
} & PropsWithChildren;

const SectionDiv = styled.section`
  margin: 0 40px;
  padding: 20px;
  border: 1px solid var(--color-grey-700);
  border-radius: 10px;
  text-align: left;

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
`;

function Card({ children, alignment = 'left' }: CardType) {
  return (
    <SectionDiv className={`${alignment !== 'left' && alignment}`}>
      {children}
    </SectionDiv>
  );
}

export default Card;
