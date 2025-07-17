import axios from "axios";
import React, { useState ,useEffect } from "react";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res.data);
        setProduct(res.data);
    }
    getData();
  }, [id]); 
  return (
    <div>
      <input type="number" onChange={(e)=>setId(e.target.value)} />
      <div class="card" style={{ width: "18rem" }}>
        <img src={product.thumbnail} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.description}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
