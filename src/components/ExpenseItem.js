import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import PropTypes from "prop-types";
function ExpenseItem(props){

    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}
ExpenseItem.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
};
export default ExpenseItem;