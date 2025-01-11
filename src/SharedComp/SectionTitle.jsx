import PropTypes from "prop-types";
const SectionTitle = ({heading, subHeading, color='black'}) => {
    return (
        <div className="text-center my-10 mb-20 ">
            <p className="italic text-[#D99904] text-xl">{subHeading}</p>
            <h3 className={`text-4xl border-y-4 inline-block px-5 py-3 mt-3 text-${color}`}>{heading}</h3>
        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    color:PropTypes.string
}
export default SectionTitle;