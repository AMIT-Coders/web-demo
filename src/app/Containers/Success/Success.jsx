"use client";
import React, { useState, useEffect } from "react";
import "./Success.scss";
import TitleBlob from "../../Components/TitleBlob/TitleBlob";
import { SlideInFromLeft, SlideInFromRight } from "../../utils/animations";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import axios from "axios";
import backend from "../../utils/backend";

import { delay } from "framer-motion";

const Success = ({ id }) => {
  const [show, setShow] = useState(false);
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${backend}/api/review`);
      setReviews(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <>
      <ApplyModal
        show={show}
        setShow={setShow}
        formType="b2c2"
        title="Get a call"
      />
      <div className="success-container" id={id}>
        <div className="empower">
          <SlideInFromLeft>
            <div className="left">
              <TitleBlob
                title={`Student Success stories`}
                fontsize="40px"
                textalign="center"
              />
              <p>
                AMIT has got more than 100k positive ratings from our users
                around the world.{" "}
              </p>
              <p>
                Some of the students and teachers were greatly helped by the
                AMIT.
              </p>
              <p>Are you too? Please give your assessment</p>
              <button
                onClick={() => {
                  setShow(true);
                }}
                className="primary-btn contact"
              >
                Contact Us
              </button>
            </div>
          </SlideInFromLeft>
          <SlideInFromLeft>
            <div className="right">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                // navigation
                spaceBetween={0}
                slidesPerView={1}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 2000 }}
                loop={true}
                style={{ width: "450px" }}
                className="reviewSwipe"
              >
                {reviews &&
                  reviews.map((review, idx) => {
                    return (
                      <SwiperSlide
                        key={idx}
                        style={{ height: "500px", width: "500px" }}
                      >
                        <div className="review-boxes" key={review._id}>
                          <div className="reviewbox">
                            <p>{review.ReviewDescription}</p>
                            <div className="reviewer">
                              <p>{review.ReviewName}</p>
                            </div>
                          </div>
                          <img src={review.mainImage} alt="" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </SlideInFromLeft>
        </div>
      </div>
    </>
  );
};

export default Success;
