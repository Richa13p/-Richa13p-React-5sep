import React from 'react'

const Second = () => {
  return (
    //nav bar 
    <div >
    <nav style={{
        width:"calc(100%- 15px)",
        borderBottom:"solid black 2px",
        display:"flex",
        justifyContent:"space-between",
        padding:"5px 15px",
        alignItems:"center"
    }}>
        <div>
           
            <image src= {"https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_1280.png"} style = {{width:"50px", height:"50px"}} alt="tooth img"/>
             logo
        </div>
        <ul style={{
            listStyle:"none",
            display:"flex",
            gap:"10px"
        }}>
        <li> data</li>
        <li> data</li>
        <li> data</li>
        <li>data</li>
        <li>data</li>
        </ul>
    </nav>

    </div>
  )
}

export default Second