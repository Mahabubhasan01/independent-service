import React from 'react';
import { useNavigate } from 'react-router-dom';
import './package.css'

const Package = ({p}) => {
    const {name,id,price,img,info} = p;
    const navigate = useNavigate()
    console.log(info)
    return (
        <div data-aos="zoom-in-up" className="col-md-4 custom-design g-3 ms-3 ">
            <div className=''>
            <img className='img-fluid' src={img} alt="" />
            <h1>{name}</h1>
            <h4> Prices : {price}</h4>
            <p>{info}</p>
            
            </div>
            <div >
                <button onClick={()=>navigate(`/checkout${id}`)} className='btn-checkout '> Checkout</button>
            </div>
            
        </div>
    );
};

export default Package;