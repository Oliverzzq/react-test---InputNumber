import React ,{ useState,userEffect }from 'react';
import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

function InputNumber(props){
    return (
        props.value ? 
        <input type="number" value={props.value} onChange={e => props.onChange(e.target.value)}/> :
        <input type="number" defaultValue={props.defaultValue}/>
    )
}

function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
        <InputNumber value={value} onChange={newVal =>{setValue(newVal)}}/>
        <InputNumber defaultValue={value} />
        </div>
    )
}

export default App;
