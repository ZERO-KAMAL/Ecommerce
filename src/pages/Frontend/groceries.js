import React, { useState, useEffect } from "react";
import Breadcumbs from "../../components/FrontComponent/Breadcrumbs";
import Layout from "./Layout/Layout";
import Products from "../../components/FrontComponent/Product";
import { fetchProducts } from "../../store/productSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../store/cartSlice";
import { BsCartPlus } from "react-icons/bs";

const Groceries = () => {
  const [crumbs, setCrumbs] = useState(["Home", "groceries"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
 


  const dispatch = useDispatch();
  const { data: products} = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  

  const handleAdd = (product) => {
    //we do is to store product to redux store
    //here payload is product that need to send to cart
    dispatch(addToCart(product));
  };

  return (
    <>
      <Layout>
        <div className="groceries">
          <div className="container">
            <Breadcumbs crumbs={crumbs} selected={selected}></Breadcumbs>
            {/* groceriesProduct */}
            <div id="groceriesProduct">
              <div className="container">
                <div className="section__title d-flex align-items-center justify-content-between">
                  <h3>Only For You</h3>
                </div>
                <div className="row row-small mt-4">
                  <Products />
                  
                </div>
              </div>
            </div>
            {/* groceriesProduct-end */}
            {/* MoreProduct */}
            <div id="moreproduct" className="section__padding">
              <div className="container">
                <div className="section__title d-flex align-items-center justify-content-between">
                  <h3>More Product</h3>
                  <button className="btn btn-bg">show more</button>
                </div>
                <div className="row mt-4">
                  <Swiper
                    // slidesPerView={4}
                    slidesPerGroup={3}
                    spaceBetween={18}
                    loop={true}
                    autoplay={{
                      delay: 500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {products.map(
                      (product, index) =>
                        index < 20 && (
                          <SwiperSlide>
                            
                              <div className="product-card h-100">
                                <div className="product-img">
                                  <img src={product.image} alt="" />
                                </div>
                                <div className="product-content p-3 mt-3">
                                  <h4>{product.title.substring(0, 20)}</h4>
                                  <p>
                                    {product.description.substring(0, 80)}..
                                  </p>
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
                            
                          </SwiperSlide>
                        )
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
            {/* MoreProduct-end */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Groceries;
