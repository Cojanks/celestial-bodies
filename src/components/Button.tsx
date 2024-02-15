import { PropsWithChildren, SyntheticEvent } from 'react';
import styled from 'styled-components';

type ButtonType = {
  handleOnClick?: (e: SyntheticEvent) => void;
  isActive?: boolean;
  disabled?: boolean;
} & PropsWithChildren;

const ButtonContainer = styled.button`
  background-color: transparent;
  font-family: var(--font-family-main);
  cursor: pointer;
  font-size: 0.9rem;

  padding: 2px 10px 4px 10px;
  color: var(--color-text);
  border: 1px solid var(--color-text);
  border-radius: 5px;
  transition: ease 0.2s transform;

  &.active {
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    font-weight: 500;
  }

  &:hover:not([disabled]) {
    transform: scale(1.1);
  }

  &:disabled {
    color: var(--color-text-secondary);
    border-color: var(--color-text-secondary);
    cursor: not-allowed;
  }
`;

function Button({
  isActive = false,
  handleOnClick,
  disabled = false,
  children,
}: ButtonType) {
  return (
    <ButtonContainer
      className={`${isActive && 'active'} `}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
