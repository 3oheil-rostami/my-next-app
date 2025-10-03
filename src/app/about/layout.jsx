'use client'
import { useState } from 'react'

export default function layout({children}) {
  const [them, setThem] = useState(false)
  return (
    <div >
      <div style={{ padding: '15px' }}>
        <h1>Rostami</h1>
       {children}
      </div>
      <div style={{textAlign:'center'}}>
      </div>
    </div>
  )
}
