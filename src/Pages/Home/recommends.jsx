import { useEffect, useState } from "react";
import SectionTitle from "../../SharedComp/SectionTitle";
import MenuCard from "../../SharedComp/MenuCard";

const Recommends = () => {
    const [recommends, setRecommends] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(single => single.category === 'offered')
                setRecommends(filter)
                console.log(recommends)
            })
    }, [])
    return (
        <section className="mx-[5%] lg:mx-[10%]">
            <div>
                <SectionTitle heading='CHEF RECOMMENDS' subHeading='----- Should Try -----' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-36 md:mx-10">
                {
                    recommends?.map(single => <MenuCard key={single._id} menu={single} />)
                }
            </div>
        </section>
    );
};

export default Recommends;