import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Recommends from "./recommends";
import Identity from "./Identity";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div className="space-y-28 mb-28">
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <div>
                <Banner />
            </div>
            <div>
                <Category />
            </div>
            <div>
                <Identity />
            </div>
            <div>
                <PopularMenu />
            </div>
            <div>
                <CallUs />
            </div>
            <div>
                <Recommends />
            </div>
            <div>
                <Featured />
            </div>
            <div>
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;