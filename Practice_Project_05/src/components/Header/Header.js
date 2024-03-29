import logo from '../../assets/investment-calculator-logo.png';
import classes from "./Header.module.css"

function Header(props) {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
