import { Helmet } from "react-helmet-async";
import Cover from "../../SharedComp/Cover";
import banner from '../../assets/menu/banner3.jpg'
import SectionTitle from "../../SharedComp/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../../SharedComp/MenuItem";
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBd from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'
const MainMenu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | MENU</title>
            </Helmet>
            <div>
                <Cover img={banner} title='OUR MENU' body='Would you like to try a dish?' type='main' />
            </div>
            <SectionTitle heading="----- Don't miss -----" subHeading="TODAY'S OFFER" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-[5%] lg:mx-[10%]">
                {
                    offered.map(single => <MenuItem key={single._id} menu={single} />)
                }
            </div>
            <div className="my-16">
                <Cover img={saladBd} title='SALADS' body='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-[5%] lg:mx-[10%]">
                {
                    salad.map(single => <MenuItem key={single._id} menu={single} />)
                }
            </div>
            <div className="my-16">
                <Cover img={soupBg} title='SUPES' body='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-[5%] lg:mx-[10%]">
                {
                    soup.map(single => <MenuItem key={single._id} menu={single} />)
                }
            </div>
            <div className="my-16">
                <Cover img={pizzaBg} title='PIZZA' body='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-[5%] lg:mx-[10%]">
                {
                    pizza.map(single => <MenuItem key={single._id} menu={single} />)
                }
            </div>

        </div>
    );
};

export default MainMenu;