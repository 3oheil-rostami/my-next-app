'use client';

import { usePathname } from "next/navigation";
import { createContext, useRef, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidbar from "../../components/Sidbar";
import '../../styles/global.css';

export const ThemContext = createContext()

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(false);
  const inputRef = useRef()
  const pathname = usePathname()

  const [family, setFamily] = useState('Rostami')
  const [name, setName] = useState('Soheil')
  const [email, setEmail] = useState('soheilrotami023@gmail.com')

  const hideFooter = ['/dashboard']
  const shouldHideFooter = hideFooter.includes(pathname)

  const themClick = () => setTheme(!theme)

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="JTdrL8b_0190y5pup8KXv3BICAcPDg7LdlDEdtXXaYs"
        />
      </head>

      <ThemContext.Provider value={{ email, family, theme, name }}>
        <body style={theme 
          ? { backgroundColor: 'white', color: 'black', transition: 'all 1s' } 
          : { backgroundColor: 'black', color: 'white', transition: 'all 1s' }
        }>

          <Header />

          <div style={{ textAlign: 'center' }}>
            <button style={{ fontSize: '1.3remf' }} onClick={themClick}>
              {theme ? 'Light' : 'Dark'}
            </button>
          </div>

          <section style={{ display: 'flex' }}>
            <Sidbar />
            <article>{children}</article>
          </section>

          {!shouldHideFooter && <Footer />}
        </body>
      </ThemContext.Provider>
    </html>
  );
}
