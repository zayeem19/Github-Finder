import React from 'react';
import PropTypes from 'prop-types';

let ReposItems = ({repo}) => {
    return (
        <div className="card p-2">
            <h6 >
            <a  className ="m-1 p-2 link-dark text-decoration-none" href={repo.html_url}>{repo.name}</a>
            </h6>
        </div>
    )
}

ReposItems.propTypes = {
    repo : PropTypes.object.isRequired
}

export default ReposItems;
