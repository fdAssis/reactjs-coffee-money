import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  padding: 3rem 1rem 8rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content:space-between;

  button {
    border: 0;
    border-radius: 0.25rem;
    padding: 0.62rem;
    
    color: var(--shape);
    font-weight: bold;

    background: var(--blue-light);

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`; 
