import React from 'react';

function Navigator(props){
    return(
        <nav className="navbar navbar-dark bg-dark">
        <a className="text-white">
        {props.titulo}
        </a>
        </nav>
    );
}

export default Navigator;