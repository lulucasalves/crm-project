export default function Entrada(props) {
  return (
    <div className={`divEntrada ${props.className}`}>
      <label>{props.texto}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={e => props.valorMudou?.(e.target.value)}
        className="inputEntrada"
      />
    </div>
  )
}
