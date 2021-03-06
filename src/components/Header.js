import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click');
    }

    return (
        <header className = 'header'>
            <h1> {title}</h1>
            <Button text = "Add" onClick = {onClick}/>
        </header>
    )
}

//creates default values
Header.defaultProps = {
    title: 'Task Tracker',
}

//ensures passed properties are of correct type
//will throw error in console if types do not match
Header.propTypes = {
    //isRequired makes input required
    title: PropTypes.string.isRequired,
}

export default Header