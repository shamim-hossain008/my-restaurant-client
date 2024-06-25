import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTaitle/SectionTitle";
import MenuItem from "../Home/Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  // console.log(menu, "all popular data");

  return (
    <section className="mb-12">
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center ">
        <button className=" btn btn-outline  border-0 border-b-4 mt-4 text-black font-bold">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
