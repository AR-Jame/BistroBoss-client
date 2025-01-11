import Cover from "../../SharedComp/Cover";
import banner from '../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import '../../index.css'
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import 'react-tabs/style/react-tabs.css';

const Order = () => {
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza')
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    const tabClass = 'py-1 px-3 text-xl font-semibold focus:outline-none data-[selected]:text-[#BB8506] data-[selected]:border-b-2 data-[selected]:border-b-[#BB8506]';
    return (
        <div>
            <Cover img={banner} title='OUR SHOP' body='WOULD YOU LIKE TO TRY A DISH' />



            <div className="flex h-screen w-full justify-center pt-24 px-4">
                <div className="w-full">
                    <TabGroup>
                        <TabList className="flex gap-4 justify-center items-center">
                            <Tab className={tabClass}>SALAD</Tab>
                            <Tab className={tabClass}>SOUP</Tab>
                            <Tab className={tabClass}>PIZZA</Tab>
                            <Tab className={tabClass}>DESSERT</Tab>
                            <Tab className={tabClass}>DRINKS</Tab>

                        </TabList>
                        <TabPanels className="mt-3">
                            <TabPanel>
                                <OrderTab item={salad} />
                            </TabPanel>
                            <TabPanel>
                                <OrderTab item={soup} />
                            </TabPanel>
                            <TabPanel>
                                <OrderTab item={pizza} />
                            </TabPanel>
                            <TabPanel>
                                <OrderTab item={dessert} />
                            </TabPanel>
                            <TabPanel>
                                <OrderTab item={drinks} />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>








            {/* <div className="w-full flex items-center justify-center">
                <div role="tablist" className="tabs tabs-bordered">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab grid-row-center text-2xl"
                        defaultChecked
                        aria-label="SALAD" />
                    <div role="tabpanel" className="tab-content p-10">
                        <div>
                            <OrderTab item={salad} />
                        </div>

                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab text-2xl"
                        aria-label="PIZZA" />
                    <div role="tabpanel" className="tab-content p-10">
                        <OrderTab item={pizza}/>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab text-2xl"
                        aria-label="SOUPS" />
                    <div role="tabpanel" className="tab-content p-10">
                        <OrderTab item={soup}/>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab text-2xl"
                        aria-label="DESSERTS" />
                    <div role="tabpanel" className="tab-content p-10">
                        <OrderTab item={dessert}/>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab text-2xl"
                        aria-label="DRINKS" />
                    <div role="tabpanel" className="tab-content p-10">
                    <OrderTab item={drinks}/>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Order;