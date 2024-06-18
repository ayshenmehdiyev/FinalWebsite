import axios from 'axios'
import React, { useState } from 'react'


export const Search = () => {
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState("")
    const getData = () =>{
            axios.get("https://665e436d1e9017dc16ef7d74.mockapi.io/data/name/data")  
              .then(res => console.log(res.data))
              .catch(error => {
                console.error('Məlumatlar çəkməkdə xəta:', error);
            });
            }
  

  return (
    <div>
      <input type="search" name="" id="" onChange={()=> setInputValue()} />
      <button onClick={getData}>Search</button>
    </div>
  )
}


