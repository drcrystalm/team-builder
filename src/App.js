import React, { useState } from "react"
import ReactDOM from "react-dom"
import Form from "./Form"
import Member from "./Member"
import logo from "./logo.svg"
import data from "./data"
import "./App.css"

function App() {
    const [members, setMembers] = useState(data)

    const addNewMember = member => {
        setMembers([...members, member])
    }

    return (
        <div className='App'>
            <h2>Member List</h2>
            <header className='App-header'>
                {/* <img src={logo} className='App-logo' alt='logo' /> */}
                <div className='form-box'>
                    <Form addNewMember={addNewMember} />
                    <Member memberList={members} />
                </div>
            </header>
        </div>
    )
}

export default App
