'use client'

import { useEffect, useState } from "react"

export default function showtablighat() {

const [num ,setNum] = useState(0)

useEffect(() => {
  setInterval(() => {
    setNum(w => w+1)
  }, 1500);

}, [])
  return (
    <div className="tablighat">
      <h1 className="showname">{num % 2 ==0 ? 'آکادمی سهیل رستمی' : 'نقشه راه برنامه نویسی بک اند و فرانت اند '}</h1>
    </div>
  )
}
