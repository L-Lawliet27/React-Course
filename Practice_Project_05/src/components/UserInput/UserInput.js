import { useState } from "react";
import InputGroup from "./InputGroup";
import UserActions from "./UserActions";
import classes from "./UserInput.module.css";

const GroupOne = [
  {
    htmlFor: "current-savings",
    label: "Current Savings ($)",
    type: "number",
    id: "current-savings",
    key: 0,
  },
  {
    htmlFor: "yearly-contribution",
    label: "Yearly Savings ($)",
    type: "number",
    id: "yearly-contribution",
    key: 1,
  },
];

const GroupTwo = [
  {
    htmlFor: "expected-return",
    label: "Expected Interest (%, per year)",
    type: "number",
    id: "expected-return",
    key: 2,
  },
  {
    htmlFor: "duration",
    label: "Investment Duration (years)",
    type: "number",
    id: "duration",
    key: 3,
  },
];

const initUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

function UserInput(props) {
  const [userInput, setUserInput] = useState(initUserInput);

  function submitHandler(event) {
    event.preventDefault();
    props.onCalculate(userInput);
  }

  function resetHandler() {
    setUserInput(initUserInput);
  }

  function inputChangeHandler(input, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <InputGroup
        className={classes["input-group"]}
        userInputs={GroupOne}
        onInputChange={inputChangeHandler}
        inputValue={userInput}
      />
      <InputGroup
        className={classes["input-group"]}
        userInputs={GroupTwo}
        onInputChange={inputChangeHandler}
        inputValue={userInput}
      />
      <UserActions onReset={resetHandler} />
    </form>
  );
}

export default UserInput;
