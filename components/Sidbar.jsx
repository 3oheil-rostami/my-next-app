import { ThemContext } from '@/app/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import LinkComponent from 'utils/link'
export default function Sidbar() {

  const { theme } = useContext(ThemContext)
  const pathname = usePathname()
  const links = [
    { href: '/', lable: 'Home' },
    { href: '/contact', lable: 'Contact' },
    { href: '/about', lable: 'About' },
    { href: '/dashboard', lable: 'Dashboard' },
    { href: '/dashboard/setting', lable: 'Setting' },
  ]
  console.log(pathname)

  return (
    <div>
      <aside style={{ margin: '10px', padding: '10px', border: '1px solid', height: '85%', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <menu>
          <ul style={{ display: 'flex', flexDirection: 'column', margin: '10px', gap: '10px' }}>
   
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  
          //  style={pathname === link.href ? {borderBottom:'1px solid red'} : {}}
           className={pathname === link.href ? 'border' : ''} 
                >
                  {link.lable}
                </Link>
              ))}

         <LinkComponent url={'https://www.google.com'} label='Google' target={"_blank"}/>
          </ul>
        </menu>
      </aside>
    </div>
  )
}

{/* <Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href='/'>Home</Link>
<Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href={'/contact'}>Contact</Link>
<Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href={'/about'}>About</Link>
<Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href={'/myres'}> Resome</Link>
<Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href={'/dashboard'}>Dashboard</Link>
<Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href={'/dashboard/setting'}> Setting</Link> */}