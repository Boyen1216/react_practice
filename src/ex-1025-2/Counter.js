import { useState, Fragment } from 'react'
import './Counter.css'

function Counter() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <button
        className="btn"
        onClick={() => {
          console.log('before total=', total)
          const newTotal = total + 1
          setTotal(newTotal) // 給react作render用(呈現畫面)
          console.log('after total=', newTotal) //其它用途
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
    </>
  )
}

export default Counter
