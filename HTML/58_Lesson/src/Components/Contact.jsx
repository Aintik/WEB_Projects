import React from "react"


export default function Contact() {
    let [a,setA] = React.useState(0)

    return (
        <div>
            <h1>This from Contact</h1>
            <h2>{a}</h2>
            <button onClick={() =>{setA(a+1)}}>+</button>
        </div>
    )
} 