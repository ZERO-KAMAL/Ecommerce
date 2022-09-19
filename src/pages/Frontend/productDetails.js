import Breadcrumbs from "../../components/FrontComponent/Breadcrumbs";
import Layout from "./Layout/Layout";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import productCardData from "../../appData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper";
import ProductImage from "../../assets/images/product1.svg";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const ProductDetails = () => {
  const [crumbs, setCrumbs] = useState(["Home", "Groceries","product-details"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  const [qty, setQty] = useState(1);
  const handleDecrement = () => {
    if (qty > 1) {
      setQty((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    if (qty < 10) {
      setQty((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <Layout>
        <div className="product__details ">
          <div className="container">
            <Breadcrumbs crumbs={crumbs} selected={selected}></Breadcrumbs>
            <div className="row section__padding d-flex align-items-center">
              <div className="col-md-5 text-center">
                <img src={ProductImage} alt="" />
              </div>
              <div className="col-md-6">
                <h4>Baltra Frosty Air Cooler 30 L</h4>
                <h3 className="mt-3">Price : Rs. 212,000</h3>
                <div className="qty mt-4">
                  <label>In Stock</label>
                  <div className="input-group qty-btns">
                    <button
                      type="button"
                      className="quantity-left-minus btn btn-first "
                      onClick={handleDecrement}
                    >
                      <BiMinus></BiMinus>
                    </button>

                    <div className="form-control input-number border-0 text-center">
                      {qty}
                    </div>

                    <button
                      type="button"
                      className="quantity-right-plus btn btn-first"
                      onClick={handleIncrement}
                    >
                      <BsPlus></BsPlus>
                    </button>
                  </div>
                </div>
                <button className="btn btn-second mt-4">Add to Cart</button>
                <div className="product-des mt-4">
                  <h4>Product Details</h4>
                  <ul className="m-0 ps-3">
                    <li>Material : Cotton </li>
                    <li>Neck: Round </li>
                    <li>
                      Color Available : Black, Mustard, Pink, Bluish Pink , Grey{" "}
                    </li>
                    <li>Fit Type: Casual Wear </li>
                    <li>Free Size </li>
                  </ul>
                </div>
              </div>
            </div>
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
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {productCardData.map((data, id) => (
                      <SwiperSlide>
                        <div className="product-card py-2" key={id}>
                          <div className="product-img">
                            <img src={ProductImage} alt="" />
                          </div>
                          <div className="product-content p-3 mt-3">
                            <h4>{data.title}</h4>
                            <p>{data.des}</p>
                            <span>{data.discountPercentage}</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
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

export default ProductDetails;
