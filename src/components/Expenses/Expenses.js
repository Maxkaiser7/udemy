import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import PropTypes from "prop-types";
import Card from "../UI/Card";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const FilterChangeHandler = dateFilter => {
        setFilteredYear(dateFilter)
    }
    const filteredExpenses = props.items.filter(e => e.date.getFullYear().toString() === filteredYear)
    console.log(filteredExpenses)
    let expenseContent = <p>No expenses found.</p>
    if (filteredExpenses.length > 0) {
       expenseContent = filteredExpenses.map(expense =>
            <ExpenseItem date={expense.date}
                         title={expense.title}
                         amount={expense.amount}
                         key={expense.id}/>
        )
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onDateFilterChange={FilterChangeHandler}
                                selected={filteredYear}/>
                {expenseContent}

            </Card>
        </div>
    )
}
Expenses.propTypes = {
    items: PropTypes.array.isRequired
};
export default Expenses;