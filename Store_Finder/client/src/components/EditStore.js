import React, { useEffect, useState } from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios'

const EditStore = () => {
  const [store, setStore] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
    axios.get("http://localhost:8000/api/onestore/" + id)
        .then((res) =>{
          console.log(res);
          console.log(res.data);
          setStore(res.data.store);
        })
        .catch((err)=>{
          console.log(err);
        })
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setStore({...store, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch("http://localhost:8000/api/updatestore/" + id, store)
    .then((res) =>{
      console.log(res);
      console.log(res.data);
      setStore(res.data.store);
      navigate("/onestore/" + id);
    })
    .catch((err) =>{
      console.log(err);
    })

  }


  return (
    <div>
      <h1>Edit Product</h1>
      <p>Edit This Store!</p>
      <Link to="/">Go back home</Link>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Store Name</label>
        <input type='text' name='storename' onChange={handleChange} value={store.storename}></input>
      </div>

      <div>
      <label>Store Number</label> 
      <input type='number' name='storenumber' onChange={handleChange} value={store.storenumber}></input>
      </div>

      <div>
        <label>Open</label>
        <input type='text' name='description' onChange={handleChange} value={store.description}></input>
      </div>

      <button type='submit'>Edit Store</button>
      </form>

    </div>
  )
}

export default EditStore;