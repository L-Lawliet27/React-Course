function TableBody(props) {
    return (
      <tbody>
        <tr>
          {props.bodyFields.map((field) => (
            <td>{field}</td>
          ))}
        </tr>
      </tbody>
    );
  }
  
  export default TableBody;