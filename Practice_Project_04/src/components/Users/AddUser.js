import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    //We use the + sign on front in order to convert the string to a number
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
