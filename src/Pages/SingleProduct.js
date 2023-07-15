// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

function SingleProduct() {
  // const [product, setProduct] = useState({});
  // const params = useParams(); //take id from server
  // // console.log(params._id);
  // useEffect(() => {
  //   axios
  //     .get(`/api/getpizza/${params._id}`)
  //     .then((res) => {
  //       // console.log(res.data)
  //       setProduct(res.data);
  //     })
  //     .then((err) => console.log(err));
  // }, [params._id]);
  // let history = useNavigate(); // implement back functionality
  // return (
  // <div className="container mx-auto mb-12">
  //   <Link to="">
  //     <button
  //       className="mt-12 font-bold mb-12"
  //       onClick={() => {
  //         history(-1);
  //       }}
  //     >
  //       Back
  //     </button>
  //   </Link>
  //   <div className="flex">
  //     <div className="left">
  //       <img src={product.image.url} alt="singleImg" />
  //     </div>
  //     <div className="right ml-8  ">
  //       <h1 className="text-xl font-bold pb-3">{product.name}</h1>
  //       <span className="bg-gray-200 rounded-full px-2 py-0.5 ">
  //         {product.size}
  //       </span>
  //       <div className="font-bold mt-3">₹{`${product.price}`}</div>
  //       <button className="bg-yellow-600 rounded-full font-bold py-1 px-5 mt-5">
  //         ADD T0 CART
  //       </button>
  //     </div>
  //   </div>
  // </div>
  // );
}

export default SingleProduct;
