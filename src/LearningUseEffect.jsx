import { useEffect, useState } from "react"

function LearningUseEffect(){
    // // First type
    // useEffect(()=>{
    //     console.log("Ma yaha xu")
    //     // fetch data
    // },[])
    const [count,setCount] = useState(0)
    const [like,setLike] = useState(1)
    const increaseCount = ()=>{
        setCount(count+1)
    }
    const decreaseCount = ()=>{
        setCount(count-1)
    }
    const likeBadau = (()=>{
        setLike(like+1)
    })

    // useEffect(()=>{
    //     console.log("hahaha")
    // },[count,like])
    // useEffect(()=>{
    //     // login, jati ahile like state ma value xa tyo backend ma pathaedine code
    //     console.log("like sent to server")
    //     },[like])
    useEffect(()=>{
        console.log("ma to jahile execute hunxu")
    })

    return(
        <>
        <h1>UseEffect Component</h1>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <h2>Like : {like}</h2>
        <button onClick={likeBadau}>Like me</button>

        </>
    )
}

export default LearningUseEffect