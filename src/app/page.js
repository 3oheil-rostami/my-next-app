'use client'
import { useEffect, useRef, useState } from "react";
// import '../../styles/button.module.css'
import styles from '../../styles/button.module.css'
import axios from "axios";
import Timer from "components/Timer";
export default function Home() {

  
  const [users , setUsers] = useState([])
  const num = useRef(0)

  useEffect(() => {
  axios('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => setUsers(data))
    .catch(err => console.log(err)) // خطای احتمالی رو هم بگیر
}, [])
useEffect(() => {
  
} , [])

  console.log(users)



  return (
    <div>
      <Timer start={60}/>
      <h1>Users : </h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      <h2 className={styles.headers}>Home Page</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repudiandae commodi beatae cumque quas repellat! Perspiciatis, animi sapiente praesentium qui soluta assumenda quia, ex nihil quibusdam illum totam! Enim, iusto.</p>


    </div>

  );
}
