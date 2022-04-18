import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({p}) => {
    const {name,id,price,img,list1,list2,list3,
        list4,list5,list6,list7,list8,list9,list10} = p;
    const navigate = useNavigate()
    console.log(p)
    return (
        <div data-aos="zoom-in-up" style={{marginLeft:'100px'}} className="col-md-4 custom-design g-5  ">
            <div className=''>
            <img className='img-fluid package-img' src={img} alt="" />
            <h1>{name}</h1>
            <h4> Prices : ${price}</h4>
            <ul style={{fontSize:'500'}}>
                <li >{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
                <li>{list4}</li>
                <li >{list5}</li>
                <li >{list6}</li>
                <li >{list7}</li>
                <li >{list8}</li>
                <li >{list9}</li>
                <li >{list10}</li>
            </ul>
            
            </div>
            <div >
                <button onClick={()=>navigate(`/checkout${id}`)} className='btn-checkout '> Checkout</button>
            </div>
            
            
        </div>
    );
};

export default Service;