import styled from "styled-components";

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }

  input {
    width: 100%;
    height: 4rem;
    background: #E7E9EE;
    border: 1px solid #D7D7D7;
    border-radius: 0.25rem;
    padding: 1rem;
    font-weight: 400;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-body);
      font-size: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;
    background: var(--green);
    border: 0;

    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--shape);
    line-height: 1.5rem;

    margin-top: 1rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }

`;

