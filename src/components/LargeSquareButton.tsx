import { PropsWithChildren, SyntheticEvent } from 'react';
import styled from 'styled-components';

type ButtonType = {
  handleOnClick: (e: SyntheticEvent) => void;
  isActive?: boolean;
} & PropsWithChildren;

const ButtonContainer = styled.button`
  background-color: transparent;
  font-family: var(--font-family-main);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--color-text);
  border: 1px solid var(--color-text);
  border-radius: 5px;
  padding: 50px;
  margin: 20px;
  transition: ease 0.2s transform;

  &.active {
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    font-weight: 500;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

function LargeSquareButton({
  isActive = false,
  handleOnClick,
  children,
}: ButtonType) {
  return (
    <ButtonContainer
      className={`${isActive && 'active'} `}
      onClick={handleOnClick}
    >
      {children}
    </ButtonContainer>
  );
}

export default LargeSquareButton;
