export default function Botao(props) {
  const cor = props.cor ?? 'gray'
  return (
    <button onClick={props.onClick} style={{background: `${props.cor}`}} className="botaoBotao">
      {props.children}
    </button>
  )
}
