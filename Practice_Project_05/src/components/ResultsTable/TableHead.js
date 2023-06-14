function TableHead(props) {
  return (
    <thead>
      <tr>
        {props.headFields.map((field) => (
          <th>{field}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
