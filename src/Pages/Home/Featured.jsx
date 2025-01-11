import SectionTitle from "../../SharedComp/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import { Parallax } from "react-parallax";

const Featured = () => {
    const insideStyles = {
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    };
    return (
        <section className="mt-56">
            <Parallax bgImage={featuredImg} bgImageStyle={{objectFit:'cover'}} strength={500}>
                <div className="lg:h-[800px] h-[900px] bg-cover relative">
                <div className="absolute inset-0 bg-[#15151593]"></div>
                    <div style={insideStyles}>
                        <SectionTitle color='white' heading='FROM OUR MENU' subHeading='----- Check it out -----' />
                        <div className="flex flex-col lg:flex-row gap-10 lg:w-[80vw] w-[90vw] items-center justify-center">
                            <div>
                                <img src={featuredImg} />
                            </div>
                            <div className="text-white text-center lg:text-left pb-16 lg:pb-0 space-y-2">
                                <p className="text-lg">March 20, 2025</p>
                                <p className="text-2xl">WHERE CAN I GET SOME?</p>
                                <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque incidunt itaque impedit necessitatibus doloremque aut perspiciatis nostrum adipisci esse cum dolores ducimus deserunt sed similique consequuntur explicabo provident vero, distinctio architecto qui ex neque nulla voluptas. Pariatur praesentium a harum tempore officiis mollitia voluptatem quae illo? Voluptates corrupti velit asperiores.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>

    );
};

export default Featured;