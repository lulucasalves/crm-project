import Cliente from '../core/Cliente'
import { IconeEdicao, IconeLixo } from './Icones'

export default function Tabela(props) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="titleTabela">Código</th>
        <th className="titleTabela">Nome</th>
        <th className="titleTabela">Idade</th>
        {exibirAcoes ? <th className="titleTabela">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="titleTabela">{cliente.id}</td>
          <td className="titleTabela">{cliente.nome}</td>
          <td className="titleTabela">{cliente.idade}</td>
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="tdTabela">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className="edit"
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}
        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className="trash"
          >
            {IconeLixo}
          </button>
        ) : (
          false
        )}
      </td>
    )
  }

  return (
    <table className="tableTabela">
      <thead className="topTabela">{renderizarCabecalho()}</thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  )
}
