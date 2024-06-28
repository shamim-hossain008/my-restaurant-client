const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const handleAddToCart = (food) => {
    console.log(food);
  };
  return (
    <div className="card  bg-base-100 w-96 shadow-xl">
      <figure>
        <img className="w-full h-72" src={image} alt="" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 text-yellow-700 uppercase bg-gray-200 "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
