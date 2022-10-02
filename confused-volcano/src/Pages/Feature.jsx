import React from "react";
import {useState, useEffect} from "react"
import GetHomedata from "./Components/GetHomedata";

function Feature(){
    const [data, setData] = useState([])

    const getdata=()=>{
        return fetch(`https://newsapi.org/v2/everything?q=apple&from=2022-09-30&to=2022-09-30&sortBy=popularity&apiKey=369d1a6575634fabbeb6b01fcc1141d8`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.articles)
            console.log(res.articles)
        })
    }
    //https://newsapi.org/v2/everything?q=tesla&from=2022-09-01&sortBy=publishedAt&apiKey=d9f630f1445343698df2b4f2ac67ea35
    useEffect(()=>{
        getdata();
    },[])
    
    
const styledata={
    display:"grid",
    gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",
    gap:"20px"
}
        return (
            <>
            <h1>Home</h1>
                <div style={{width:"80%", margin:"auto"}}>
                   <div style={styledata}>
                        {
                            data.map((el)=>(
                                <GetHomedata img={el.urlToImage} title={el.title} des={el.description} />
                            ))
                        }
                   </div>
                </div>
            </>
        )
}

export default Feature;