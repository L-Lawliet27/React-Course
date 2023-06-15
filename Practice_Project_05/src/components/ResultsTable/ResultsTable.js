import classes from "./ResultsTable.module.css";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const HeadFields = [
  { field: "Year", id: 0 },
  { field: "Total Savings", id: 1 },
  { field: "Interest (Year)", id: 2 },
  { field: "Total Interest", id: 3 },
  { field: "Invested Capital", id: 4 },
];

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultsTable(props) {
  return (
    <table className={classes.result}>
      <TableHead headFields={HeadFields} />
      <TableBody data={props.yData} initInvestment={props.initInvestment} formatter={formatter}/>
    </table>
  );
}

export default ResultsTable;
