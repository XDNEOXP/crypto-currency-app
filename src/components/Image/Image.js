import PropTypes from 'prop-types'

const Image = ({imgSrc}) => {
    return(
        <img src={imgSrc} />
        )
    }
    
Image.propTypes = {
        imgSrc: PropTypes.string
    }
    

export default Image