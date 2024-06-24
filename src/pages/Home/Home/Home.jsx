import React from "react";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
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
      <Featured />
    </div>
  );
};

export default Home;
