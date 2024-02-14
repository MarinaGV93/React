function Button(props) {
  // Usar em 1 linha se irá retornar só 1 evento
  return <button onClick={props.event}>{props.text} </button>;
}

export default Button;
