"use client"; // چون از state و useEffect استفاده می‌کنیم

import { useEffect, useState } from "react";

export default function About() {
  const [time, setTime] = useState("");
  const [num , setNum] = useState(0)

  useEffect(() => {
    const addNum = setInterval(() => {
      setNum(n => n+1)
    }, 1000);

    return () => clearInterval(addNum)

  },[])
  useEffect(() => {
    // هر ثانیه یکبار این تابع اجرا میشه
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    // cleanup برای جلوگیری از memory leak
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <article>
        number : {num}
        <h2>About Page</h2>

        {/* نمایش زمان زنده */}
        <p>⏰ ساعت فعلی: {time}</p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          repudiandae commodi beatae cumque quas repellat! Perspiciatis, animi
          sapiente praesentium qui soluta assumenda quia, ex nihil quibusdam
          illum totam! Enim, iusto.
        </p>
      </article>
    </div>
  );
}
