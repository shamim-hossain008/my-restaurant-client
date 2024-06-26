import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../Cover/Cover";
import MenuItem from "../../Home/Home/Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/orderFood/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 text-yellow-700 uppercase bg-gray-200 ">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
