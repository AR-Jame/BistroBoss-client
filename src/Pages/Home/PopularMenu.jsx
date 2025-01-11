import useMenu from "../../hooks/useMenu";
import MenuItem from "../../SharedComp/MenuItem";
import SectionTitle from "../../SharedComp/SectionTitle";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
   
    return (
        <div className="mx-[5%] lg:mx-[10%]">
            <div>
                <SectionTitle heading={'FROM OUR MENU'} subHeading={"-----Popular Items-----"} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {
                    popular.map(menu => <MenuItem key={menu._id} menu={menu} />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;