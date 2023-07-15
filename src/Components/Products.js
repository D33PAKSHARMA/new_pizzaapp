import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/getpizza")
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto ">
      <h1 className="font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-10 gap-24">
        {/* Carts  */}
        {data.map((singleData) => (
          <Product key={singleData._id} Data={singleData} />
        ))}
      </div>
    </div>
  );
};

export default Products;
