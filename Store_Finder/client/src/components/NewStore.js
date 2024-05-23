import React, {useState} from 'react';
import{useNavigate, Link} from "react-router-dom";
import axios from "axios";

const NewStore = ({store, setStore}) => {
  const navigate = useNavigate();
  const [storeDetails, setStoreDetails] = useState ({
    storename:"",
    storenumber:"",
    open:""
  });

  const handleChange = (e) => {
    e.preventDefault();
    setStoreDetails({...storeDetails, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/newstore", storeDetails)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setStore([...store, res.data.store]);
      navigate("/");
    })
    .catch((err)=>{
      console.log(err);
    })


  }

  return (
    <div>
      <h1>New Store</h1>
      <Link to="/">Go back home</Link>
      <p>Add Store!</p>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Store Name</label>
        <input type='text' name='storename' onChange={handleChange} value={storeDetails.storename}></input>
      </div>

      <div>
      <label>Store Number</label> 
      <input type='number' name='storenumber' onChange={handleChange} value={storeDetails.storenumber}></input>
      </div>

      <div>
        <label>Open</label>
        <input type='text' name='description' onChange={handleChange} value={storeDetails.description}></input>
      </div>


      <button type='submit'>Add Store</button>
      </form>
    </div>
  )
}
export default NewStore;