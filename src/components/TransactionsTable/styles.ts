import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;
  
    th{
      color: var(--text-body);
      text-align: left;
      font-weight: 500;
      padding: 1rem 2rem;
      //line-height: 1.5rem;
    }

    td { 
      border: 0;
      background: var(--shape);
      padding: 1rem 2rem;
      text-align: left;
      color: var(--text-body);

      &:first-child{
        color: var(--text-title);
      }

      &.deposit{
        color: var(--green);
      }

      &.withdraw{
        color: var(--red);
      }
    }


    
  }
`;