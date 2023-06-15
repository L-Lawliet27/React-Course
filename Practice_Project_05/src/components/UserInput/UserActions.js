import classes from "./UserActions.module.css";

function UserActions(props) {
  return (
    <p className={classes.actions}>
      <button type="reset" className={classes.buttonAlt} onClick={props.onReset}>
        Reset
      </button>
      <button type="submit" className={classes.button}>
        Calculate
      </button>
    </p>
  );
}


export default UserActions;