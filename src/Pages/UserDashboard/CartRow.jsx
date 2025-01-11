import PropTypes from "prop-types";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useToast from "../../hooks/useToast";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const CartRow = ({ item, idx }) => {
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()
    const Toast = useToast();
    const { pic, name, price, _id } = item;
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Toast.fire({
                                icon: "success",
                                title: "Your item successfully added in the cart"
                            });
                        }
                        refetch();
                    })
            }
        });

    }
    return (
        <tr className="border-b">
            <td className="pl-5 text-center">{idx}</td>
            <td className="py-3"><img src={pic} className="w-20 mx-auto" /></td>
            <td className="text-center">{name}</td>
            <td className="text-center">{price}</td>
            <td className="text-center"><button onClick={() => handleDelete(_id)} className="text-center btn hover:bg-red-500 text-xl bg-[#b91c1c] p-3 text-white rounded-lg"><MdDeleteOutline /></button></td>
        </tr>
    );
};
CartRow.propTypes = {
    item: PropTypes.object,
    idx: PropTypes.number
}
export default CartRow;

// Toast.fire({
//     icon: "success",
//     title: "Your item successfully added in the cart"
// });