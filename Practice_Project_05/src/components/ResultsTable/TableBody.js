function TableBody(props) {
  return (
    <tbody>
      {props.data.map((i) => (
        <tr key={i.year}>
          <td>{i.year}</td>
          <td>{props.formatter.format(i.savingsEndOfYear)}</td>
          <td>{props.formatter.format(i.yearlyInterest)}</td>
          <td>
            {props.formatter.format(
              i.savingsEndOfYear -
                props.initInvestment -
                i.yearlyContribution * i.year
            )}
          </td>
          <td>
            {props.formatter.format(
              props.initInvestment + i.yearlyContribution * i.year
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
