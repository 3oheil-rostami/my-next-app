import axios from "axios"
import Link from "next/link"


export const revalidate = 10 ;
export default async function Posts() {
    const {data : posts} = await axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
    
    console.log('====> posts')
  return (
    <div>
        {
            posts.map((post) => (
                <ul key={post.id}>
                    <li>
                       <Link href={`/posts/${post.id}`}> {post.title}</Link>
                    </li>
                </ul>
            ))
        }
    </div>
  )
}
