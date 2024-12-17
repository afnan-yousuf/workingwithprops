import React from 'react'

function Posts() {


    const [post, setPost] = useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
      setPost(data) 
    })
  },[])


  return (
    <ul>
        {
          post.map((item)=>{
            return <li key={item.id}>{item.id} - {item.body}</li>
          })
        }
      </ul>
  )
}

export default Posts