import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
const Cover = ({ img, title, body, type }) => {
    return (

        <Parallax
            blur={{ min: -10, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={500}
        >
            <div className={`hero ${type === 'main' ? 'lg:h-[800px] h-[500px]' : 'h-[500px]'}`}>
                <div className=""></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md lg:max-w-6xl bg-[#15151575] px-14 py-10 lg:px-72 lg:py-14">
                        <h5 className={`${type === 'menu'? 'lg:text-[88px]': 'lg:text-[50px]'} text-3xl py-10 font-bold cinzel`}>{title}</h5>
                        <p className="text-lg">{body}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};
Cover.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    type: PropTypes.string,
}
export default Cover;