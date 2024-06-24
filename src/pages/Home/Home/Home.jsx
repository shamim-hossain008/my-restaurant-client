import React from "react";
import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "./Category/Category";
import MenuItem from "./Shared/MenuItem/MenuItem";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <MenuItem />
    </div>
  );
};

export default Home;
