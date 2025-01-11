import PropTypes from "prop-types";
const MenuCard = ({ menu }) => {
    const { image, name, recipe } = menu;
    console.log(menu)
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
                    <button className="btn bg-[#E8E8E8] hover:bg-[#1F2937] text-[#BB8506] border-t-0 border-x-0 border-b-2 border-[#BB8506] ">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};
MenuCard.propTypes = {
    menu: PropTypes.object,
}
export default MenuCard;