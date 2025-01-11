import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import useToast from "../hooks/useToast";
const MenuCard = ({ menu }) => {

    const { image, name, recipe } = menu;
    const axiosSecure = useAxiosSecure();
    const Toast = useToast()
    const [, refetch] = useCart()
    const { user } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    

    const handleCart = (food) => {
        if (user && user.email) {
            const cartData = {
                foodId: food._id,
                email: user.email,
                pic: food.image,
                price: food.price,
                name: food.name,
            }
            axiosSecure.post('/cart', { cartData })
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Toast.fire({
                            icon: "success",
                            title: "Your item successfully added in the cart"
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location.pathname })
                    console.log(location);
                }
            });
        }
    }
    return (
        <div className="card rounded-none bg-base-100 my-5">
            <figure>
                <img
                    src={image}
                    className="w-full h-80"
                    alt="Shoes" />
            </figure>
            <div className="card-body bg-[#F3F3F3] text-center space-y-5">
                <h2 className="text-xl font-semibold text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleCart(menu)} className="btn bg-[#E8E8E8] hover:bg-[#1F2937] text-[#BB8506] border-t-0 border-x-0 border-b-2 border-[#BB8506] ">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};
MenuCard.propTypes = {
    menu: PropTypes.object,
}
export default MenuCard;