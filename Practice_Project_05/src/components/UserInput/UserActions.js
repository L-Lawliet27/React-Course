import classes from "./UserActions.module.css";

function UserActions() {
  return (
    <p className={classes.actions}>
      <button type="reset" className={classes.buttonAlt}>
        Reset
      </button>
      <button type="submit" className={classes.button}>
        Calculate
      </button>
    </p>
  );
}


export default UserActions;