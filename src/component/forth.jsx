import React , {useState} from 'react'
//clock in react

const Forth = () => {
 const [count, setCount ] = useState(0)
  const add = ()=>{
    setCount(count+1)
  }
    return (
   <div style ={{display:"flex", flexDirection:"column" , justifyContent:"center",width:"100%"}}>
    <button   style= {{width:"20%" ,marginTop:"30px"}}onClick={add}> click me</button>
    you press it {count} time
   </div>
  )
}

export default Forth