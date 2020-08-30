import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './Components/News/News';
import axios from 'axios';

function App() {
  const [articles,setArticles] = useState([])
  // useEffect(()=>{
  //   const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=33de15ed5d0f42839cee63f62b5e27eb'
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => console.log(data))    
  // },[])

  useEffect(()=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=33de15ed5d0f42839cee63f62b5e27eb'    
    axios(url)
    .then(data => setArticles(data.data.articles))    
  },[])

  return (
    <div>
      <h1>
        Total Headings : {articles.length}
      </h1>
      {
        articles.map(article =><News article={article}></News>)
      }
      
    </div>
  );
}

export default App;
