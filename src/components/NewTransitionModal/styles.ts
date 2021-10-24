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

export const TransitionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface ButtonBoxProps{
  isSelected: boolean;
  selectColor: 'green' | 'red';
}

const colors = {
  green: 'rgb(51, 204, 149, 0.2)',
  red: 'rgb(229, 46, 77, 0.2)',
}


export const ButtonBox = styled.button<ButtonBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;
  background: ${(props) => props.isSelected 
    ? colors[props.selectColor]
    : '#E7E9EE'
  };
  
  border: 1px solid #D7D7D7;
  border-radius: 0.25rem;

  transition: border 0.2s;

  img{
    width: 24px;
    height: 24px;
  }

  &:hover{
    border: 2px solid #C9D9D9;
  }

  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1.2rem;
    color: var(--text-title);
  }
`;