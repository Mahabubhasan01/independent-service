import React from 'react';
import useCustomHook from '../../Shared/Customhook';
import Service from './Service';
import './service.css'

const Services = () => {
const [packages] = useCustomHook()    
    return (
        <div className="row  services">
            {
                packages.map(p=><Service
                key={p.id}
                p={p}
                ></Service>)
            }
        </div>
    );
};

export default Services;