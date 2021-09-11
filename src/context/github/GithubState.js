import {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_API_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_API_GITHUB_CLIENT_SECRET;
}
else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

let GithubState = props => {
    let initialState = {
        users : [],
        repos : [],
        user : {},
        loading : false
    }

    let [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    let searchUsers = async (text) => {
        setLoading()
        let res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id${githubClientId}
        &client_secret${githubClientSecret}`);
        dispatch ({
            type : SEARCH_USERS,
            payload : res.data.items
        });
      }

    //Get User
    let getUser = async(username) => {
        setLoading()
        let res = await axios.get(`https://api.github.com/users/${username}?client_id${githubClientId}
        &client_secret${githubClientSecret}`);
        dispatch ({
            type : GET_USER,
            payload : res.data
        });
      }
    

    //Get Repos
    let getUserRepos = async(username) => {
        setLoading()
        let res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id${githubClientId}
        &client_secret${githubClientSecret}`);
        dispatch ({
                type : GET_REPOS,
                payload : res.data
            });
      }
      

    //Clear Users
    let clearUsers = () => dispatch({type : CLEAR_USERS});

    //Set Loading
    let setLoading = ()=> dispatch({ type : SET_LOADING});

    return <GithubContext.Provider
    value = {{
        users : state.users,
        user : state.user,
        repos : state.repos,
        loading: state.loading,
        clearUsers,
        searchUsers,
        getUser,
        getUserRepos
    }}>
       {props.children} 

    </GithubContext.Provider>
}
export default GithubState;