import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import Cover from "../../Cover/Cover";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> My Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      <PopularMenu />
      <Cover img={menuImg} title={"Our Menu"} />
      <PopularMenu />
      <Cover img={menuImg} title={"Our Menu"} />
      <PopularMenu />
      <Cover img={menuImg} title={"Our Menu"} />
      <PopularMenu />
    </div>
  );
};

export default Menu;
