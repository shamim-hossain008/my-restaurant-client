const MenuItem = ({ item }) => {
  console.log(item, " from menu items");

  return (
    <div>
      <h1>{item?.name}</h1>
      <img src={item?.image} alt="" />
    </div>
  );
};

export default MenuItem;
