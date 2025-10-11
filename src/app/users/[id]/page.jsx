import axios from 'axios';

export default async function User({ params }) {

  const { id } = await params;

  const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
  return (

    <div>
      username : {user.name}
      <hr />
      email : {user.email}
      <hr />
      address : {user.address.city}
    </div>
  )
}
