import React from "react";
import Smallbox from "./Part1/Smallbox"
function Home(){
    return (
        <>
        <h1>Home</h1>
        <div style={{width:"80%", margin:"auto",border:"1px solid black",}}>
            <div style={{display:"flex",gap:"20px"}}>
                <div style={{width:"400px"}}>
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/09/30/tharoor-kharge-1149619-1664530340.jpg?itok=DtQ946Vw" alt="avatar" width="400px" />
                </div>
                <Smallbox/>
          </div>
              
        </div>
     
        </>
    )
}

export default Home;