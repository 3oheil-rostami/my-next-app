import axios from 'axios';
import Link from "next/link";

export const revalidate = 3;

export default async function page() {

    const { data: albums } = await axios('https://jsonplaceholder.typicode.com/albums')
    console.log(revalidate)

    return (
        <div>
            {albums.map((album) => (
                <ul key={album.id}>
                    <li>
                        <Link href={`albums/${album.id}`}>
                            {album.title}
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    )
}
