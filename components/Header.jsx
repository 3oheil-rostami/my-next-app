'use client';
import Image from 'next/image';
import { useEffect, useState } from "react";
import '../public/images/logo.png';
// import logo from '../public/images/logo.png'


export default function Header({ onClickk, children }) {

  const [time, setTime] = useState('')

  useEffect(() => {
    const intervale = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervale)

  }, [])

  const [btn, setBtn] = useState(false)
  return (
    <header style={{ textAlign: 'center', padding: '2rem' }}>
      <div style={{ display: 'flex', alignContent: "space-around", justifyContent:"space-between" }}>
        
          <h2> ساعت فعلی: {time} ⏰</h2>
          {/* <img style={{width:'5rem'}} src={'./images/download.png'} alt="" /> */}
          {/* <Image src={'./images/logo.png'} width={200} height={100}/> */}
          <Image priority src={'/images/download.png'} width={150} height={60} alt='logo-page'/>
      
      </div>

      <Image priority src={'/images/soheil.jpg'} alt='user-image' height={100} width={100} style={{ borderRadius: '50% ' }} />


      <h2 style={{ display: 'flex', gap: '1.5rem', textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}><span style={{ color: 'yellowgreen' }}>S O H E I L</span>   <span> R O S T A M I</span></h2>

    </header>
  )
}
