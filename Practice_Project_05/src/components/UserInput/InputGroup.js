function InputGroup(props) {
  return (
    <div className={props.className}>
      {props.userInputs.map((i) => (
        <p>
          <label htmlFor={i.htmlFor}>{i.label}</label>
          <input type={i.type} id={i.id} />
        </p>
      ))}
    </div>
  );
}

export default InputGroup;
