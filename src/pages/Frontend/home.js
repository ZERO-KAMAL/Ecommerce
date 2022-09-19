import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper";

import BannerImage from "../../assets/images/banner-img.svg";
import { AiFillTags } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import Layout from "./Layout/Layout";
import { addToCart } from "../../store/cartSlice";
//dispatch: with the help of it we can dispatch actions
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../store/productSlice";

import { STATUSES } from "../../store/productSlice";
const Home = () => {
  const [visible, setVisible] = useState(4);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const handleAdd = (product) => {
    //we do is to store product to redux store
    //here payload is product that need to send to cart
    dispatch(addToCart(product));
  };
  if (status === STATUSES.LOADING) {
    return <div className="loader__animate">Loading...</div>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  //

  return (
    <>
      <Layout>
        {/* <Products></Products> */}
        {/* main-banner */}
        <div id="main__banner">
          <div className="main-banner__slider">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              loop={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="main__banner-img">
                  <img src={BannerImage} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main__banner-img">
                  <img src={BannerImage} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main__banner-img">
                  <img src={BannerImage} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* main-banner-end */}

        {/* highlight-banner */}
        <div id="highlight-banner" className="div__padding">
          <div className="container">
            <div className="row row-small">
              <div className="col-md-4">
                <div className="highlight-bannner__card d-flex align-items-center">
                  <div className="icon">
                    <AiFillTags></AiFillTags>
                  </div>
                  <div className="content ms-3">
                    <h4>Product Discounts</h4>
                    <p>
                      nare montes, in tempor consequat. Tempus, arcu risus nisl
                      eget
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="highlight-bannner__card d-flex align-items-center">
                  <div className="icon">
                    <FaTruckMoving></FaTruckMoving>
                  </div>
                  <div className="content ms-3">
                    <h4>Product Discounts</h4>
                    <p>
                      nare montes, in tempor consequat. Tempus, arcu risus nisl
                      eget
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="highlight-bannner__card d-flex align-items-center">
                  <div className="icon">
                    <AiFillTags></AiFillTags>
                  </div>
                  <div className="content ms-3">
                    <h4>Product Discounts</h4>
                    <p>
                      nare montes, in tempor consequat. Tempus, arcu risus nisl
                      eget
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* highlight-banner-end */}

        {/* product__listing */}
        <div id="product__listing" className="section__padding">
          <div className="container">
            <div className="section__title d-flex align-items-center justify-content-between">
              <h3>Popular Product</h3>
              <button className="btn btn-bg">show more</button>
            </div>
            <div className="row row-small">
              {products.slice(0, 8).map((product, index) => (
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
            </div>
          </div>
        </div>
        {/* product__listing-end */}

        {/* onlyforyou */}
        <div id="onlyforyou" className="section__padding">
          <div className="container">
            <div className="section__title d-flex align-items-center justify-content-between">
              <h3>Only For You</h3>
              <button className="btn btn-bg ">show more</button>
            </div>
            <div className="row mt-4 row-small">
              {products.slice(0, visible).map((product, index) => (
                <div className="col-6 col-lg-3  mt-4">
                  <div className="product-card h-100">
                    <div className="product-img">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="product-content p-3 mt-3">
                      <h4>{product.title.substring(0, 40)}</h4>
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
            </div>
            <div className="load-more d-flex align-items-center justify-content-center">
              <button className="btn btn-second mt-4" onClick={showMoreItems}>
                Load More
              </button>
            </div>
          </div>
        </div>
        {/* onlyforyou-end */}
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
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
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
                            <h4>{product.title.substring(0, 40)}</h4>
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
                      </SwiperSlide>
                    )
                )}
              </Swiper>
            </div>
          </div>
        </div>
        {/* MoreProduct-end */}
      </Layout>
    </>
  );
};

export default Home;
