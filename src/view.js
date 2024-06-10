import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

function View(){
  let location = useLocation();
  const id = new URLSearchParams(location.search).get(id);
  const[form, setForm] = useState({
    title: '',
    content:''
  })
  

  let detail = () =>{
    Axios.get(`http://34.64.62.209:8000/detail?id=${id}`)
    .then( res => {
      if(res.data.length > 0){
        setForm({
          title:res.data[0].title,
          content:res.data[0].content,
        })
      }
    })
    .catch(function (error) {     
      console.log(error);
    });
  }
  useEffect(()=>{
    detail();
  })
  return (
  <div>
    <h2>글 상세</h2>
    <h3>{form.title}</h3>
    <div>{form.content}</div>
    <hr/>
    <Link to='/'>

    </Link>
  </div>
)
}

export default View;