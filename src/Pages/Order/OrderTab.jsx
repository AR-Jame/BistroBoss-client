import PropTypes from "prop-types";
import MenuCard from "../../SharedComp/MenuCard";
const OrderTab = ({ item }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mx-[5%] lg:mx-[10%] lg:grid-cols-3 gap-10">
            {item?.map(single => <MenuCard
                key={single._id}
                menu={single}
            />)}
        </div>
    );
};
OrderTab.propTypes = {
    item: PropTypes.array
}
export default OrderTab;
