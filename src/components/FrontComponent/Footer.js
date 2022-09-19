import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import constData from "../../utils/AppConstants";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top div__padding">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-box">
                  <h3>About Us</h3>
                  <div className="quick-link">
                    <ul>
                      <li>
                        <a href="">About Company</a>
                      </li>
                      <li>
                        <a href="">Careers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-box">
                  <h3>Information</h3>
                  <div className="quick-link">
                    <ul>
                      <li>
                        <a href="">FAQ</a>
                      </li>
                      <li>
                        <a href="">Return & Refund Policy</a>
                      </li>
                      <li>
                        <a href="">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-box">
                  <h3>Follow us on</h3>
                  <div className="quick-link">
                    <ul>
                      <li>
                        <a
                          href={constData.FACEBOOK_URL}
                          className="d-flex align-items-center"
                        >
                          <FaFacebook className="me-2"></FaFacebook>Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href={constData.INSTAGRAM_URL}
                          className="d-flex align-items-center"
                        >
                          <FaInstagram className="me-2"></FaInstagram>Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href={constData.YOUTUBE_URL}
                          className="d-flex align-items-center"
                        >
                          <BsYoutube className="me-2"></BsYoutube>Youtube
                        </a>
                      </li>
                      <li>
                        <a href="" className="d-flex align-items-center">
                          <AiFillTwitterCircle className="me-2"></AiFillTwitterCircle>
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-box">
                  <h3>Customer Support</h3>
                  <div className="quick-link">
                    <ul>
                      <li>
                        <div className="">
                          Call us
                          <a href="" className="ms-2">
                            {constData.CONTACT}
                          </a>
                        </div>
                        <div>
                          whatsapp/viber
                          <a href="" className="ms-2">
                            {constData.CONTACT_ONE}
                          </a>
                        </div>
                      </li>
                      <li>
                        <div>
                          You can mail us at
                          <a href="" className="ms-2">
                            {constData.EMAIL}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="d-flex flex-column flex-md-row flex-lg-row flex-sm-row justify-content-center align-items-center justify-content-md-between justify-content-sm-between">
              <div className="copyright">
                All Right Reserved. Copyright 2022
              </div>
              <div className="design&develop">
                Design and Devloped by <a href="">Cliff Byte</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
