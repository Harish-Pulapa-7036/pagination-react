import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Pagination from './pagination';

function App() {
  const [data,setdata]=useState([])
  const [perpage]=useState(10);
  const [currentpage,setcurrentpage]=useState(1)
  const paginate=(number)=>{
      setcurrentpage(number)
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
    .then(data=>setdata(data)).catch(e=>console.log(e))
  },[])
  let indexoflast=currentpage*perpage;
  let indexoffirst=indexoflast-perpage
  let currentposts=data.slice(indexoffirst,indexoflast)
  return (
    <div className="App">
      <Pagination data={currentposts} totalposts={data.length} perpage={perpage} paginate={paginate}/>
    </div>
  );
}

export default App;
