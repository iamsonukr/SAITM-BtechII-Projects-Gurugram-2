import { useEffect, useState } from "react"


const Input = ({changeDis,dis}) =>{
    // const [display,setDisplay]=useState("hello")

    function chageDisplay(e){
        changeDis(e.target.value)
    }
    
    return (
    <>

    <label htmlFor="name">
        Name : <input type="text" value={dis } onChange={chageDisplay}/>
     </label>
    </>
    )
}

export default Input;