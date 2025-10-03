import React from 'react'

export default function layout({children}) {
  return (
    <div style={{ textAlign:'center'}}>
        <div>
            <h2>نمونه کارهای من </h2>
        </div>
      {children}
    </div>
  )
}
