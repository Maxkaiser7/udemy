import './Card.css'
import PropTypes from "prop-types";
const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}
Card.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}
export default Card