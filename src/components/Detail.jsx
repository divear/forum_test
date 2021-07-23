import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from"../logo/logo.png"


function Detail() {
    const {id} = useParams()
    const [comment, setComment] = useState()

    const [data, setData] = useState({
        username: "",
        body: ""
    });

    async function addComment(){
        console.log("s");
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
    },[])
    
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
            <div className="replies">
                <h3 className="nameReply">luke</h3>
                <h1 className="question">idk</h1>
            </div>

            {/* input a comment */}
            <form onSubmit={addComment} className="inputComment">
                <input value={comment} setComment={e => setComment(e.target.value)} placeholder="your comment" type="text" />
                <button>send</button>
            </form>
        </div>
    )
}

export default Detail
