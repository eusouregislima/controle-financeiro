import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de app</td>
              <td>
                <PriceHighlight variant="income">R$ 50.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/04/2023</td>
            </tr>

            <tr>
              <td width="50%">Despesas com materiais</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.000,00</PriceHighlight>
              </td>
              <td>Compra</td>
              <td>12/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
