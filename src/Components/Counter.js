import React, {useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [num, setNum] = useState(0)
    const [step,setStep]=useState(1)
    const incHandler=(e)=>{
        e.preventDefault()
        setNum(num + (+step))
    }
    const decHandler=(e)=>{
        e.preventDefault()
        setNum(num-step)
    }
    const stepHandler=(e)=>{
        e.preventDefault()
        setStep(e.target.value)
    }
    return (
        <>
        <div>
            <div className='boxy'>
            <div classNmae='dis'>
            <h1>Counter</h1>
                <h2 className='text'> {num} </h2>
            </div>
            <div classNmae='box'>
                <button type='submit' onClick={incHandler}> + </button>
                <button type='submit' onClick={decHandler}> - </button>
            </div>
            <div className='step'><input type="number" onChange={stepHandler}></input></div>
            </div>
        </div>
        </>

    )
}
export default Counter