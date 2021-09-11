import React from 'react'
import PropTypes from 'prop-types'
import ReposItems from './ReposItems'

let Repos = ({repos}) => {
    return repos.map(repo => <ReposItems repo ={repo} key={repo.id}/>);
};

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;