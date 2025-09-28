'use client';

import { createContext, useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidbar from "../../components/Sidbar";
import { usePathname } from "next/navigation";
import '../../styles/global.css'
export const ThemContext = createContext()

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(false); // ✅ داخل تابع کامپوننت
  const inputRef = useRef()
  const pathname = usePathname()


  const [name , setName] = useState('Soheil')
  const hideFooter = ['/dashboard']

  const shouldHideFooter = hideFooter.includes(pathname)


  const themClick = () => {
    setTheme(!theme)
  }

  return (
    <html lang="en">
      <ThemContext.Provider value={{theme , name}}>
        <body style={theme ? { backgroundColor: 'white', color: 'black', transition: 'all 1s' } : { backgroundColor: 'black', color: 'white', transition: 'all 1s' }}>
          <div style={{ textAlign: 'center' }}>
          </div>
          {/* <Header onClickk={() => alert('cll')}>Are you sure ? </Header> */}
          <Header > </Header>

          <div style={{ textAlign: 'center' }}>
            <button onClick={themClick}>{theme ? 'Light' : 'Dark'}</button>

          </div>
          <section style={{ display: 'flex' }}>
            <Sidbar />
            <article>
              {children}

            </article>
          </section>


          {!shouldHideFooter && <Footer />}

        </body>
      </ThemContext.Provider>
    </html>
  );
}
