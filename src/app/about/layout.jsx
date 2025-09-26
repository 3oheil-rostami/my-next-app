'use client'
import { useState } from 'react'

export default function layout({children}) {
  const [them, setThem] = useState(false)
  return (
    <div style={them ? { backgroundColor: 'darkgray', transition: 'all 1s', borderRadius:'10px'} : { backgroundColor: '#f4f4f4',color:'green' , transition: 'all 1s', borderRadius:'10px'}}>
      <div style={{ padding: '15px' }}>
        <h1>Rostami</h1>
       {children}
      </div>
      <div style={{textAlign:'center'}}>
        <button onClick={() => setThem(!them)}>them</button>
      </div>
    </div>
  )
}
