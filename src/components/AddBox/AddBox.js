import React, { useState} from "react";
function AddBox(){
    const [val,setVal]=useState([]);
    const handleAdd=()=>{
        const abc=[...val,[]]
        setVal(abc)
    }
    const handleChange=()=>{}
return(
    <>
    <button onClick={()=>handleAdd()}>Add Location</button>
        {val.map((data,i)=>{
            return(
                <input oNchange={e=>handleChange(e,i)}/>
            )
        })}
    </>
)
}
export default AddBox;