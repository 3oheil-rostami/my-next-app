'use client'

import { useEffect, useState } from "react"

export default function Timer(props) {
    const [num , setNum] = useState(props.start)

    useEffect(() => {
        setInterval(() => {
            setNum(w => w + 1)
        }, 1000);
    } , [])
  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}
