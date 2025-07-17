import React, { useEffect, useState } from "react";
import axios from "axios";
//if dependency arrray is [] then useEffect run once
function DataFetching() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await axios.get("https://dummyjson.com/products");
      console.log(res.data);
      setProducts(res.data.products);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row row-col-4">
        {products.map((product, index) => {
          return (
            <div className="col">
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
        })}
      </div>
    </div>
  );
}

export default DataFetching;
