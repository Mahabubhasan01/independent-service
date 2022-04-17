import React from 'react';
import useCustomHook from '../../../Shared/Customhook';
import CheckOut from '../../CheckOut/CheckOut';
import Footer from '../../Footer/Footer';
import Package from './Package';


const Home = () => {
    let [packages,setPackages] = useCustomHook()
    return (
        <div className="top">
            <div className='top-bar'>
            
            <div className="row container mx-auto ">
            {
            packages.map(p=> <Package
            key={p.id}
            p={p}
            ></Package>)
            }
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Home;