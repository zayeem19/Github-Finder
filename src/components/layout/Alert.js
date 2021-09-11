import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

let Alert =() => {
    let alertContext = useContext(AlertContext);

    let {alert} = alertContext;
    return (
        alert !== null && (
        <div className={`alert alert-${alert.type}`}>
            <i className ="fas fa-info-circle"></i> {alert.msg}
        </div>
    ))
}

export default Alert;