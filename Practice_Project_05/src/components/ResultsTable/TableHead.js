function TableHead(props) {
  return (
    <thead>
      <tr>
        {props.headFields.map((i) => (
          <th key={i.id}>{i.field}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
