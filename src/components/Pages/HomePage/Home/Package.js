import React from 'react';

const Package = ({p}) => {
    const {name,id,price,img,info} = p
    console.log(info)
    return (
        <div>
            <h1>packages</h1>
           
            <h1>{name}</h1>
            
        </div>
    );
};

export default Package;