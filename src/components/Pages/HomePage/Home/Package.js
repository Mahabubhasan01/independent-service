import React from 'react';
import { useNavigate } from 'react-router-dom';
import './package.css'

const Package = ({p}) => {
    const {name,id,price,img,info,list1,list2,list3,
        list4,list5,list6,list7,list8,list9,list10} = p;
    const navigate = useNavigate()
    console.log(p)
    return (
        <div data-aos="zoom-in-up" className="col-md-4 custom-design g-3 ms-3 ">
            <div className=''>
            <img className='img-fluid package-img' src={img} alt="" />
            <h1>{name}</h1>
            <h4> Prices : ${price}</h4>
            <ul>
                <li key={id}>{list1}</li>
                <li key={id}>{list2}</li>
                <li key={id}>{list3}</li>
                <li key={id}>{list4}</li>
                <li key={id}>{list5}</li>
                <li key={id}>{list6}</li>
                <li key={id}>{list7}</li>
                <li key={id}>{list8}</li>
                <li key={id}>{list9}</li>
                <li key={id}>{list10}</li>
            </ul>
            
            </div>
            <div >
                <button onClick={()=>navigate(`/checkout${id}`)} className='btn-checkout '> Checkout</button>
            </div>
            
            
        </div>
    );
};

export default Package;