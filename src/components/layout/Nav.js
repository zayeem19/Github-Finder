import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

let Nav = ({icon, title}) => {
   
        return (
            <nav className="navbar bg-primary text-light p-3">
                <h3>
                <i className={icon}/> {title}
                </h3>
                <ul className='list-unstyled d-flex align-items-baseline'>
                    <li>
                        <Link to='/' className = "text-light text-decoration-none mx-2">Home</Link>
                    </li>
                    <li>
                        <Link to ='/about' className = "text-light text-decoration-none">About</Link>
                    </li>
                </ul>
            </nav>
        )
    
}


Nav.defaultProps = {
    title : 'github Finder',
    icon : 'fab fa-github'
}

Nav.propTypes = {
    title: PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
}

export default Nav
