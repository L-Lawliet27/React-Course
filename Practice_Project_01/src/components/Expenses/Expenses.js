import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import Card from "../UI/Card";

function Expenses(props) {
  const [enteredYear, setYear] = useState("2020");

  const yearChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={enteredYear}
          onSelectedYear={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
