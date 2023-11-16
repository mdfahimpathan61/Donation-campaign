import React from 'react';

const Categories = ({category}) => {
    console.log(category)
    const {image, title, topic, color1, color2, color3} = category;
    
    return (
        <div>
            <div>
                
                <img className='rounded-t-md' src={image} alt="" />
                <div className={`rounded-b-md bg-[${color3}]`}>
                   <div className='m-2'>
                     <h3 className={`text-sm font-medium bg-[${color2}] text-[${color1}] px-1 rounded-md`}>{topic}</h3>
                    <h2 className='text-xl font-semibold  text-black'>{title} </h2>
                   </div>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Categories;