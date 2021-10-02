import PropTypes from 'prop-types'
import './Button.css'

const Button = ({handelClick, children}) => {
    return(
        <button className="Morebtn" onClick={handelClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    handelClick: PropTypes.func.isRequired,
    children: PropTypes.any
}

export default Button