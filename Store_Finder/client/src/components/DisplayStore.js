import React, { useEffect } from 'react'
import{Link} from "react-router-dom";
import axios from 'axios';



const DisplayStore = ({allStore, setAllStore}) => {
  // const navigate = useNavigate();

  useEffect(() =>{
    axios.get("http://localhost:8000/api/allstore", setAllStore)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setAllStore(res.data.store);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])


  return (
    <div>
        <h1>
        Store Finder
        </h1>
        <p>Find Stores In Your Arae!</p>
      <table>
        <thead>
          <tr>
            <th>Store</th>
            <th>Store Number</th>
            <th>Open</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
        {
          allStore.map((store, index)=>{
            return <tr key={index}>
              <td><Link to={"/onestore/" + store._id }>{store.storename}</Link></td>
              <td> {store.storenumber}</td>
              <td>{store.open}</td>
              <td> <button onClick={() => (store._id)}>Remove</button></td>
            </tr>
          })
        }

          
        </tbody>
        </table>
        <Link to='/newstore'>Can't Find Your Store?</Link>
    </div>
  )
}

export default DisplayStore;