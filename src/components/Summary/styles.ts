import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: -5rem;

  padding: 0 1rem;
  div {
    background: var(--shape);
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong{ 
      display: block;
      margin-top: 1rem;
      font-weight: 500;
      font-size: 2rem;
    }

    &:last-child {
      background: var(--green);
      color: var(--shape);
    }
  }
`;