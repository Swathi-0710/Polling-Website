import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
// import "./fetch.css"
function App() {
    const [datas,setdatas]=useState([])
    useEffect(()=>{
        Axios.get('http://localhost/Reactusers/Forms.php',{name:us,age:qu}).then((res)=>{
        if(res.Message=="Success"){
          alert("SUCCCCCCC");
        }
        else{
          alert("nooooCCCCCC");
        }})
      }
        // setdatas(res.data));
    
   
//       return(
//       datas.map((r)=>{
// return(
//     <div className="div">
//     <p>{r.category}</p>
//     <img src={r.image} style={{height:"100px",width:"100px"}} />
//     <p>price :{r.price}</p>
//     <p>title :{r.title}</p>
//     </div>
// )

//       })
//       )
// }
export default App;