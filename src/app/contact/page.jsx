// 'use client'
import axios from "axios";


export default async function Contact() {

 const {data : users} = await axios('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', // مثل getServerSideProps
  });




  return (
    <div>
        <h2>Contact Page</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis repudiandae commodi beatae cumque quas repellat! Perspiciatis, animi sapiente praesentium qui soluta assumenda quia, ex nihil quibusdam illum totam! Enim, iusto.</p>
        {
          users.map((user) => (
            <div key={user.id}>
              <ul>
                <li>{user.name}</li>
              </ul>
            </div>
          ))
        }

    </div>


  );
}

