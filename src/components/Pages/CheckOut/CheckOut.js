import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { packContext } from '../../../App';

const CheckOut = () => {
    const {id} = useParams();
    const [packages] = useContext(packContext)
    const pack = packages.find(p => p.id === id);

    
    return (
        <div>
            <h1>this is checkout{pack.name}</h1>
        </div>
    );
};

export default CheckOut;