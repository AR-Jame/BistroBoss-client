import useCart from "../../hooks/useCart";
import SectionTitle from "../../SharedComp/SectionTitle";
import CartRow from "./CartRow";

const Cart = () => {
    const [cart] = useCart();
    let price = 0;
    cart?.map(item => {
        price = price + parseFloat(item.price)
    });
    return (
        <div className="bg-[#f6f6f6] flex justify-center w-full min-h-screen">
            <div>
                <SectionTitle heading="WANNA ADD MORE?" subHeading="----- My Cart -----" />
                <div className="bg-[#ffffff] shadow-md p-10">
                    <div className="cinzel flex justify-between items-center text-xl font-bold">
                        <p>Total orders: {cart.length}</p>
                        <p>total price: ${price}</p>
                        <button className="bg-[#d1a054] text-white p-3 text-base rounded-lg btn hover:bg-[#d1a054]">PAY</button>
                    </div>
                    <table className="w-full border-none lg:min-w-[700px]">
                            <tr className="text-white bg-[#d1a054]">
                                <th className="font-normal pl-5 py-5 rounded-tl-lg"></th>
                                <th className="font-normal py-5">ITEM IMAGE</th>
                                <th className="font-normal py-5">ITEM NAME</th>
                                <th className="font-normal py-5">PRICE</th>
                                <th className="font-normal py-5 rounded-tr-lg">ACTION</th>
                            </tr>
                            {
                                cart?.map((item, idx) => 
                                <CartRow 
                                key={item._id} 
                                item={item}
                                idx={idx + 1}
                                />)
                            }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;