import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTaitle/SectionTitle";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title> My Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      {/* main  cover */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      {/* offered menu items  */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory items={desserts} title="dessert" coverImg={dessertImg} />
      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg} />
      {/* soup menu items */}
      <MenuCategory items={soup} title="soup" coverImg={soupImg} />
      {/* salad menu items */}
      <MenuCategory items={salad} title="salad" coverImg={saladImg} />
    </div>
  );
};

export default Menu;
