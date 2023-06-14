import classes from "./ResultsTable.module.css"
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const HeadFields = ["Year", "Total Savings", "Interest (Year)", "Total Interest", "Invested Capital"];
const BodyFields = ["YEAR NUMBER","TOTAL SAVINGS END OF YEAR","INTEREST GAINED IN YEAR","TOTAL INTEREST GAINED","TOTAL INVESTED CAPITAL"];

function ResultsTable() {
  return (
    <table className={classes.result}>
      <TableHead headFields={HeadFields}/>
      <TableBody bodyFields={BodyFields}/>
    </table>
  );
}

export default ResultsTable;
