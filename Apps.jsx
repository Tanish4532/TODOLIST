import React, { useState } from 'react';
import Todolist from './Todolist';
 const Apps=()=>{
const [inputlist,setlist]=useState("");
const [items,setitems]=useState([]);
const inputEvent=(event)=>{
setlist(event.target.value);
}
const Updateitems=()=>{
    setitems((olditems)=>{
        return [...olditems,inputlist];
    })
    setlist("");

}
const deleteitem=(id)=>{
    setitems((olditems)=>{
        return olditems.filter((arrelm,index)=>{
          return index !==id;
        })
    })
        
}
     return (
         <>
         <div className="main_div">
             <div className="list_div">
                 <h1>TODO LIST</h1>
                 <input type="text" placeholder="Add an Item" onChange={inputEvent} value={inputlist} />
                 <button onClick={Updateitems}>+</button>
                 <ol>
                 {items.map((itemval,index)=>{
                     return <Todolist text={itemval} key={index} id={index} onSelect={deleteitem}/>
                 })}
                     

                     
             </ol>
             </div>
             
         </div>
         </>
     )
 }
 export default Apps;