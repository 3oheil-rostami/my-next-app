'use client';
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Header({ onClickk, children }) {

  const [time, setTime] = useState('')

  useEffect(() => {
    const intervale = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(intervale)

  } , [])

  const [btn, setBtn] = useState(false)
  return (
    <header style={{ textAlign: 'center', padding: '2rem' }}>
      <div style={{display:'flex'}}>
        <h2> ساعت فعلی: {time} ⏰</h2>
      </div>
      {/* <img style={{borderRadius:'50%', width:'100px'}} src={'/images/soheil.jpg'}/> */}
      <Image src={'/images/soheil.jpg'} alt='user-image' height={100} width={100} style={{ borderRadius: '50% ' }} />
      <h2 style={{ display: 'flex', gap: '1.5rem', textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}><span style={{ color: 'yellowgreen' }}>S O H E I L</span>   <span> R O S T A M I</span></h2>
    </header>
  )
}
