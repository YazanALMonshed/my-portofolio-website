import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: #FFF;
  height: 100%;
`;

export const CardHover = styled.div`
  div:hover {
    opacity: .7;
    transition-duration: 300ms;
    transition-timing-function: ease-in;  
    transform: scale(0.95);
  }
`;