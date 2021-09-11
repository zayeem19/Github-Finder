import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

let UserItem = ({users:{avatar_url, login, html_url}}) => {
        return (
            <div className="card text-center p-3">
                <img src={avatar_url}
                alt=""
                className = 'rounded-circle mx-auto'
                style={{width:'60px'}}
                />
                <h3>
                    {login}
                </h3>
                <div>
                    <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        )
    
}

UserItem.propTypes = {
    users : PropTypes.object.isRequired
}

export default UserItem
