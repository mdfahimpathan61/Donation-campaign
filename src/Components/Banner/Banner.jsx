import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='text-center my-36'>
                <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
                <div className='flex justify-center mt-10'>
                    <input className='p-2 rounded-l-md border border-[#FF444A]' type="text" placeholder='search here..' />
                    <h4 className='bg-[#FF444A] text-white font-medium text-2xl p-2 rounded-r-md'>Search</h4>

                </div>

            </div>
            
        </div>
    );
};

export default Banner;