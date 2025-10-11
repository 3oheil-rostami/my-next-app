import axios from "axios"

export default async function page({params}) {
    const {id} = params

    const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return (
    <div>
     <h2>{post.title}</h2>
    </div>
  )
}
