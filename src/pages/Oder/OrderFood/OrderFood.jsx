import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCoverImg from "../../../assets/shop/order.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Cover/Cover";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
         const desserts = menu.filter((item) => item.category === "dessert");
         const soup = menu.filter((item) => item.category === "soup");
         const salad = menu.filter((item) => item.category === "salad");
         const pizza = menu.filter((item) => item.category === "pizza");
         const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Cover img={orderCoverImg}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
