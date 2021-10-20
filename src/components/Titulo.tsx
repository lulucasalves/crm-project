export default function Titulo(props) {
  return (
    <div className="divTitulo">
      <h1 className="h1Titulo">{props.children}</h1>
      <hr className="lineTitulo" />
    </div>
  )
}
