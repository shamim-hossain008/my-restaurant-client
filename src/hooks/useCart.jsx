// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";

// const useCart = () => {
//   // tan Stack Query
//   const axiosSecure = useAxiosSecure();
//   const { data: cart = [] } = useQuery({
//     queryKey: ["cart"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/carts");
//       return res.data;
//     },
//   });
//   return [cart];
// };

// export default useCart;

// use different / (Interesting) Show Add To Cart Count Using Refetch

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
