import SectionTitle from "../../../Components/SectionTaitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-4 my-20 ">
      <SectionTitle subHeading={"check it out"} heading={"Featured Item"} />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            "Good afternoon, everyone. Today, we stand at the crossroads of
            innovation and opportunity. As we move forward, let's embrace
            creativity, collaboration, and resilience. Together, we can
            transform challenges into achievements and dreams into reality.
            Remember, our strength lies in unity, and our future is bright.
            Thank you for your dedication and passion."
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
