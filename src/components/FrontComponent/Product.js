import React, { useState, useEffect } from "react";

import { addToCart } from "../../store/cartSlice";
//dispatch: with the help of it we can dispatch actions
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../store/productSlice";

import { STATUSES } from "../../store/productSlice";
import { BsCartPlus } from "react-icons/bs";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = (product) => {
    //we do is to store product to redux store
    //here payload is product that need to send to cart
    dispatch(addToCart(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className="productsWrapper">
      <div className="row row-small">
        {products.slice(0, visible).map((product, index) => (
          <div className="col-6 col-lg-3  mt-4">
            <div className="product-card h-100">
              <div className="product-img">
                <img src={product.image} alt="" />
              </div>
              <div className="product-content p-3 mt-3">
                <h4>{product.title.substring(0, 20)}</h4>
                <p>{product.description.substring(0, 80)}..</p>
                <span>${product.price}</span>
              </div>
              <div className="add-to-cart">
                <button
                  className="add-to-cart btn-first me-auto p-2"
                  onClick={() => handleAdd(product)}
                >
                  <BsCartPlus></BsCartPlus>
                  <span className="ms-2">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="load-more d-flex align-items-center justify-content-center">
          <button className="btn btn-second mt-4" onClick={showMoreItems}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
