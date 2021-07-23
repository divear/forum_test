import React, { useEffect, useState } from 'react'
import img from"../logo/logo.png"
import {FiSend} from "react-icons/fi"
import { useHistory } from 'react-router-dom'

function Input() {
    var history = useHistory()
    var username = localStorage.getItem("username")
    const [body, setbody] = useState("")


    useEffect(() => {
        if(!username){
            history.push("/sign")
        }
    }, [])

    async function add(e){
        e.preventDefault()
        try {
            const Rbody = {body}
            const Rname = {username}
            
            const arr = [Rbody, Rname]
            const response = await fetch("http://localhost:4001/posts", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(arr)
            });
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="logoBanner">
                <a href="/"><img className="img" src={img} alt="logo" width="50" height="50"/></a>
            </div>
            <form className="addInputDiv">
                <textarea value={body} onChange={e => setbody(e.target.value)} className="inputBody" placeholder="Your question..." type="text" />
                <button type="submit" onClick={e => add(e)} className="sendButton"><FiSend className="sendSymbol"/></button>
            </form>
        </div>
    )
}

export default Input
