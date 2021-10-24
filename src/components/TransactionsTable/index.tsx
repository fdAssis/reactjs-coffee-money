import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable(){

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data));
  },[]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de App</td>
            <td className='deposit'>R$10.000</td>
            <td>Venda</td>
            <td>20/10/2021</td>
          </tr>
           <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$1000</td>
            <td>Casa</td>
            <td>20/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}