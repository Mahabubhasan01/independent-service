import React from 'react';
import './package.css'

const Package = ({p}) => {
    const {name,id,price,img,info} = p
    console.log(info)
    return (
        <div className='col-md-4 custom-design g-3 ms-3'>
            <div className=''>
            <img className='img-fluid' src={img} alt="" />
            <h1>{name}</h1>
            </div>
            
            
        </div>
    );
};

export default Package;