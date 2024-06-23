import React from "react";
import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "./Category/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
    </div>
  );
};

export default Home;
