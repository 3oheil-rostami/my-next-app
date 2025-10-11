// 'use client'
import axios from "axios";
import Timer from "components/Timer";
import Link from "next/link";

export default async function Contact() {

 const {data : users} = await axios('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', // مثل getServerSideProps
  });

  



  return (
    <div>
      <Timer start={0}/>
        <h2>Contact Page</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repudiandae commodi beatae cumque quas repellat! Perspiciatis, animi sapiente praesentium qui soluta assumenda quia, ex nihil quibusdam illum totam! Enim, iusto.</p>
        {
          users.map((user) => (
            <div key={user.id}>
              <ul>
                <li>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                  </li>
              </ul>
            </div>
          ))
        }

    </div>


  );
}

