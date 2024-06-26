import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTaitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

import MenuItem from "../Home/Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  // console.log(menu, "all popular data");

  return (
    <section className="mb-12">
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center ">
        <Link
          to="/menu"
          className=" btn btn-outline  border-0 border-b-4 mt-4 text-black font-bold"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
