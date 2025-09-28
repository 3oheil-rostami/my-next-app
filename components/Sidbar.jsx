import { ThemContext } from '@/app/layout'
import Link from 'next/link'
import { useContext } from 'react'

export default function Sidbar() {
  const {theme} = useContext(ThemContext)
  return (
    <div>
      <aside style={{margin:'10px', padding:'10px', border:'1px solid', height:'85%' , borderRadius:'5px' , display:'flex', justifyContent:'center', alignContent : 'center'}}>
        <menu>
            <ul style={{display:'flex', flexDirection:'column', margin:'10px', gap:'10px'}}>
                <Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href='/'>Home</Link>
                <Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href={'/contact'}>Contact</Link>
                <Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href={'/about'}>About</Link>
                <Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href={'/dashboard'}>Dashboard</Link>
                <Link style={theme ? {color:'black' , transition:'all 0.5s'} : {color:'white' , transition:'all 0.5s'}}  href={'/dashboard/setting'}> Setting</Link>
                
            </ul>
        </menu>
      </aside>
    </div>
  )
}
 