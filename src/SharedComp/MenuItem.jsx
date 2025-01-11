import PropTypes from "prop-types";
const MenuItem = ({ menu }) => {
    const {image,name, price, recipe} = menu;
    return (
        <div className="flex items-center gap-5">
            <img src={image} className="w-24 h-24 rounded-tl-0 rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px] " />
            <div className="flex justify-center gap-">
                <div>
                    <h3 className="text-lg lg:text-2xl font-thin">{name} ------</h3>
                    <p className="font-light text-sm md:text-xl">{recipe}</p>
                </div>
                <p className="text-[#BB8506] text-xl font-medium">${price}</p>
            </div>
        </div>
    );
};
MenuItem.propTypes = {
    menu: PropTypes.object
}
export default MenuItem;