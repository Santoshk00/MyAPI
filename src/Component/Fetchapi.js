import React, { useState,useEffect } from 'react'

   function FetchAPI() {
       const [data,setData]=useState([]) 
   const postData=()=>{
         fetch("https://reqres.in/api/users?page=2")
         .then((response)=>response.json())
         .then(json=>{
             console.log(json)
             setData(json);
         });
        }
        useEffect(() => {
           postData();
        }, [])
            
    return (
            <div>
                <h1>My Api Data</h1>
                <button onClick={postData}>Click</button><br/>
                {JSON.stringify(data,null)}
               
                
            </div>
        );
    }

export default FetchAPI;