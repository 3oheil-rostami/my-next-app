import axios from "axios"


export default async function page() {

   const {data : user} = await axios('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store', // مثل getServerSideProps
  });
  console.log(user)

  return (

    <div>
      <h1>Blog 1</h1>
      <h2>{user.name}</h2>
    </div>

  )
}
