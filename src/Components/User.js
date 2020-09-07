import React from 'react'
import '../App.css'
import UserInput from './User-Input'

export default User 

function User (props) {
    return (
        <div style={{border: '5px solid black', width: 200}}>
            <p style={{ fontWeight: props.boldness ===true ? 'bold':'normal' }} >Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}