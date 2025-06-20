import React from 'react';
import logo from '../../../assets/logo.png'
const ProFastLogo = () => {
    return (
        <div className='flex  items-end relative'>
            <img src={logo} className='absolute -left-5 -top-4' alt="" />
            <h2 className='font-bold text-3xl  '>XpressWay</h2>
        </div>
    );
};

export default ProFastLogo;