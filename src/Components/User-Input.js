import React, {useState, useEffect} from 'react'
import '../App.css'
import User from './User'

export default UserInput

function UserInput () {
    
    const [name, setName] = useState('Theo')
    const nameSetter = (event) => setName(event.target.value)
    
    const [age, setAge] = useState('24')
    const ageSetter = (event) => setAge(event.target.value)

    const [logs, setLogs] = useState(0)
    const logIncrementer = () => setLogs(logs+1)
    
    //const consoleLog = () => console.log(name, age, logs)
    
    const [bold, setBold] = useState(false)
    const boldName = () => setBold(!bold)

    
    useEffect (() => {
        console.log(name, age, logs)
    }, [logs])

    return (
        <div>
            <User name={name} age={age} boldness={bold} />
            <div>
                <input type={'text'} onChange={nameSetter} placeholder={'Enter your Name'} /> <br/>
                <input type={'text'} onChange={ageSetter} placeholder={'Enter your Age'} /> 
            </div>
            <button onClick={logIncrementer}>Log to Console</button>
            <button onClick={boldName}>Make Name Bold</button>
        </div>
    )
}