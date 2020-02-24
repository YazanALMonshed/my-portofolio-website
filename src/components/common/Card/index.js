import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: #FFF;
  height: 100%;
`;

export const CardHover = styled.div`
  div:hover {
    opacity: .8;
    transition-duration: 500ms;
    transition-timing-function: ease-out;  
    transform: scale(0.95);
  }
`;