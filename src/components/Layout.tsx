import Titulo from './Titulo'

export default function Layout(props) {
  return (
    <div className={`backgroundLayout`}>
      <Titulo>{props.titulo}</Titulo>
      <div>{props.children}</div>
    </div>
  )
}
