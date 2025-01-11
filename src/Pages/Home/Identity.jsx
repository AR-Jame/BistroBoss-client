import identity from '../../assets/home/chef-service.jpg'
const Identity = () => {
    return (
        <section className='relative mx-[5%] lg:mx-[10%]'>
            <div className=''>
                <img src={identity} className='w-full h-[200px] object-cover lg:h-full ' />
            </div>
            {/* <div className='absolute top-[50%] h-full left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white lg:px-40 py-20 text-center'> */}
            <div className='absolute top-0 left-0 flex justify-center items-center flex-col h-full px-1 md:w-1/2 md:mx-[25%]'>
                <div className='bg-[#ffffff94] lg:bg-white mx-auto md:p-10'>
                    <h1 className='lg:text-5xl text-2xl text-center font-thin lg:mb-6'>Bistro Boss</h1>
                    <p className='text-sm text-center lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </section>
    );
};

export default Identity;