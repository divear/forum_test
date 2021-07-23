import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignIn() {
    const [uname, setuname] = useState("")
    var history = useHistory()

    function send(){
        if(uname){
            localStorage.setItem("username", uname)
            history.push("/")
        }
    }

    return (
        <form>
            <h1>Type in your name to continue </h1>
            <input value={uname} onChange={(e)=>setuname(e.target.value)} className="inputName" placeholder="Your name..." type="text" />
            <button onClick={send}>Ok</button>
        </form>
    )
}

export default SignIn
