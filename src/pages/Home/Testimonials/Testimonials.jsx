import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../Components/SectionTaitle/SectionTitle";

// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  console.log(reviews, "reviews data");
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Clint Say"}
        heading={"Testimonials"}
      />
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8">{review?.details}</p>
                <h3 className="text-2xl text-orange-400">{review?.name}</h3>
                <p>{review?.ranking}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Testimonials;
