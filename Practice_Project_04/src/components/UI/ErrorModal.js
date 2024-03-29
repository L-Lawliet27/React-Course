import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import { Fragment } from "react";

function ErrorModal(props) {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </Fragment>
  );
}

export default ErrorModal;
