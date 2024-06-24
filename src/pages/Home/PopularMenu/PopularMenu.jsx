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

  console.log(menu, "all popular data");

  return (
    <section>
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      <div>
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
