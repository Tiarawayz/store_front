import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import axios from "axios";

const OneStore = () => {
  const [store, setStore] = useState({});
  const {id} = useParams();

  useEffect(() =>{
    axios.get("http://localhost:8000/api/onestore/"+ id)
          .then((res)=>{
          console.log(res);
          console.log(res.data);
          setStore(res.data.store);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (<div>
    <h1>Store Finder</h1>
    <Link to="/">Go back home</Link>
    <p>{store.storename}</p>
    <p>{store.storenumber}</p>
    <p>{store.open}</p>
    <p><Link to={"/editstore/" + store._id }>Edit Store</Link></p>
</div>
)
  
}

export default OneStore