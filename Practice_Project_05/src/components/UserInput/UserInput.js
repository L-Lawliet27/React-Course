import InputGroup from "./InputGroup";
import UserActions from "./UserActions";
import classes from "./UserInput.module.css"

const GroupOne = [
  {
    htmlFor: "current-savings",
    label: "Current Savings ($)",
    type: "number",
    id: "current-savings",
  },
  {
    htmlFor: "yearly-contribution",
    label: "Yearly Savings ($)",
    type: "number",
    id: "yearly-contribution",
  },
];

const GroupTwo = [
  {
    htmlFor: "expected-return",
    label: "Expected Interest (%, per year)",
    type: "number",
    id: "expected-return",
  },
  {
    htmlFor: "duration",
    label: "Investment Duration (years)",
    type: "number",
    id: "duration",
  },
];

function UserInput(props) {
  return (
    <form className={classes.form}>
      <InputGroup className={classes['input-group']} userInputs={GroupOne} />
      <InputGroup className={classes['input-group']} userInputs={GroupTwo} />
      <UserActions />
    </form>
  );
}

export default UserInput;
