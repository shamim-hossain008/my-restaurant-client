import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // send cart to the database
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart..!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,  login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login");
        }
      });
    }
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
