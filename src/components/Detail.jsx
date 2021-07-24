import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from"../logo/logo.png"


function Detail() {
    const {id} = useParams()
    const [body, setbody] = useState()
    const username = localStorage.getItem("username")

    const [data, setData] = useState({
        username: "",
        body: ""
    });
    
    const [dataS, setDataS] = useState({
        username: "",
        body: ""
    });

    async function addbody(e){
        e.preventDefault()
        try {
            const Rbody = {body}
            const Rname = {username}
            const Rkey = {id}
            
            const arr = [Rbody, Rname, Rkey]
            const response = await fetch("http://localhost:4001/coms", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(arr)
            });
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    
    useEffect(()=>{

        async function getTodo(){
            try {
                const response = await fetch(`http://localhost:4001/posts/${id}`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getTodo()
        async function getComments(){
            try {
                const response = await fetch(`http://localhost:4001/coms/${id}`);
                const jsonData = await response.json();
                setDataS(jsonData);
                console.log(dataS);
            } catch (error) {
                console.log(error);
            }
        }
        getComments()
    },[])
    useEffect(() => {
        console.log(data);
    }, [data])
    
    return (
        <div>
            <div className="logoBanner">
                <a href="/"><img className="img" src={img} alt="logo" width="50" height="50"/></a>
            </div>

            {/* question */}
            <div className="post">
                <h3 className="name">{data.username}</h3>
                <h1 className="question">{data.body}</h1>
            </div>

            {/* replies */}
            {dataS[0] && dataS.map(d =>{
                return(
                    <div className="replies">
                        <h3 className="nameReply">{d.username}</h3>
                        <h1 className="question">{d.body}</h1>
                    </div>
                )
            })}


            {/* input a body */}
  
            <form onSubmit={e => addbody(e)} className="inputComment">
                <input value={body} onChange={(e) => setbody(e.target.value)} placeholder="your body" type="text" />
                <button>send</button>
            </form>


        </div>
    )
}

export default Detail
