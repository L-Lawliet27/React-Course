function InputGroup(props) {
  return (
    <div className={props.className}>
      {props.userInputs.map((i) => (
        <p key={i.key}>
          <label htmlFor={i.htmlFor}>{i.label}</label>
          <input type={i.type} id={i.id} onChange={(event)=>props.onInputChange(i.id,event.target.value)} value={props.inputValue[i.id]}/>
        </p>
      ))}
    </div>
  );
}

export default InputGroup;
