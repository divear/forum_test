import React, { useEffect, useState } from 'react'


function List() {
    const [data, setData] = useState(null)
    

    
    useEffect(()=>{
        //localStorage.clear()
 
        async function getTodos(){
            try {
                const response = await fetch("http://localhost:4001/posts");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getTodos()
    },[])

    return (
        <div className="cont">
            {data && data.map(d => {
                return(
                    <div key={d.post_id} className="post">
                        <h3 className="name">{d.username}</h3>
                        <h1 className="question">{d.body}</h1>
                        <a href={`/detail/${d.post_id}`}><h2 className="repliesMes">Show replies</h2></a>
                    </div>
                )
            })
        }    
            
        </div>
    )
}

export default List;