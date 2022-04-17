import React from 'react';
import useCustomHook from '../../../Shared/Customhook';
import Package from './Package';


const Home = () => {
    const [packages,setPackages] = useCustomHook()
    return (
        <div>
            <h1>hello</h1>
            {
            packages.map(p=> <Package
            key={p.id}
            p={p}
            ></Package>)
            }
        </div>
    );
};

export default Home;