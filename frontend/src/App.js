import {Outlet} from 'react-router-dom';
import './App.css';
import Header from './Common/Header';
import { useState, useEffect } from 'react';

function App() {
  let [data, setData]=useState([]);

  useEffect(()=>{
    const fetchMovieData=async()=>{
      try{
        const response=await fetch("http://localhost:3000/Movie.json");
        const da=await response.json();
        setData(da);
      }catch(err){}
    };
    fetchMovieData();
  },[]);
  console.log(data);
  return (
    <div className="App">
      <Header></Header>
      <Outlet
        context={{
          data,
        }}>
      </Outlet>
    </div>
  );
}

export default App;