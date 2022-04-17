import React from 'react';
import useCustomHook from '../../../Shared/Customhook';
import Package from './Package';


const Home = () => {
    const [packages,setPackages] = useCustomHook()
    return (
        <div className=''>
            
            <div className='row container mx-auto'>
            {
            packages.map(p=> <Package
            key={p.id}
            p={p}
            ></Package>)
            }
            </div>
        </div>
    );
};

export default Home;