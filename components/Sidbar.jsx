import Link from 'next/link'

export default function Sidbar() {
  return (
    <div>
      <aside style={{margin:'10px', padding:'10px', border:'1px solid', height:'85%' , borderRadius:'5px' , display:'flex', justifyContent:'center', alignContent : 'center'}}>
        <menu>
            <ul style={{display:'flex', flexDirection:'column', margin:'10px', gap:'10px'}}>
                <Link href='/'>Home</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/dashboard'}>Dashboard</Link>
                <Link href={'/dashboard/setting'}> Setting</Link>
                
            </ul>
        </menu>
      </aside>
    </div>
  )
}
