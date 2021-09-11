import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

let Search = () => {
    let githubContext = useContext(GithubContext);
    let alertContext = useContext(AlertContext);
    
    let [text, setText] = useState('')

   let onSubmit = (e) => {
        e.preventDefault();
        if (text === '') { alertContext.setAlert('Please enter something', 'light')}
        else {
        githubContext.searchUsers(text); 
        setText('');
    }};

   let onChange = (e) => setText(e.target.value);
        return (
            <div>
                <form onSubmit={onSubmit} className="form-group my-2">
                    <input type="text" name="text" className="form-control" placeholder="search users"
                    value ={text}
                    onChange = {onChange}/>
                    <input type="submit" value= "search" className="btn btn-dark my-2 w-100"/> 
                </form>
                {githubContext.users.length > 0 && <button className="btn btn-light w-100" 
                onClick = {githubContext.clearUsers}>
                Clear </button>  }
               </div>
        )
    
}


export default Search
