'use client'
import { useEffect, useState } from "react";

export default function Home() {

  const [num, setNum] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setNum(n => n + 1)
    }, 1000);
    console.log(num)
    
  }, [])

  return (
    <div>

      <h1>{num}</h1>

      <h2>Home Page</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repudiandae commodi beatae cumque quas repellat! Perspiciatis, animi sapiente praesentium qui soluta assumenda quia, ex nihil quibusdam illum totam! Enim, iusto.</p>


    </div>

  );
}
