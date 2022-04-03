import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [data,setData] = useState([])
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log('getting from ::::',res.data)
      setData(res.data)
    })
    .catch(err=>
      console.log(err))
  },[])

  const postData = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      title,
      body
    })
    .then(res=>
      console.log('Posting data ::::',res.data))
    .catch(err=>
        console.log(err))

  }

  const postDelete = (id ) => {
    
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>
      console.log('Deleted x',res.data))
    .catch(err=>
        console.log(err))

  }

  const arr= data.map((data,index)=>{
    return(
      <tr>
      <td style={{border:'2px solid black'}}>{data.id}</td>
      <td style={{border:'2px solid black'}}>{data.title}</td>
      <td style={{border:'2px solid black'}}>{data.body}</td>
      <td style={{border:'2px solid black'}}><button onClick={()=>{postDelete(data.id)}}>Delete</button></td>

    </tr>
    )
  })

  return (
    <div className="App">
      <h1> Using axios</h1>
      <form>
        <label>Title</label>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <hr/>
      <label>Body</label>
      <input type='text' value={body} onChange={(e) => setBody(e.target.value)}/>
      <hr/>
      <button onClick={postData}>Post</button>
      </form>
      <table >
      <tbody>
  <tr>
    <th style={{border:'2px solid black'}}>ID</th>
    <th style={{border:'2px solid black'}}>Title</th>
    <th style={{border:'2px solid black'}}>Body</th>
    <th style={{border:'2px solid black'}}>Delete</th>
  </tr>
  {arr}
 
  </tbody>
</table>
    </div>
  );
}

export default App;
