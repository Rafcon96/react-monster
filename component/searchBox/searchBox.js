import React from 'react';

import './searchBox.css'


export function SearchBox ({placeholder, handelChange}){
    return (
        <input 
        className = 'search'
        type ='search'
        placeholder= {placeholder}
        onChange = {handelChange}
        />
    );
}