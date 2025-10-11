import axios from 'axios'
import React from 'react'

export default async function page({params}) {

    const {id} = params

    const {data : album} = await axios(`https://jsonplaceholder.typicode.com/albums/${id}`)
    console.log(id)
  return (
    <div>
      <h1>id : {album.id}</h1>
    </div>
  )
}
