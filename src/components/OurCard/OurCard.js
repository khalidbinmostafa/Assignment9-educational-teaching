import React, { useEffect, useState } from 'react';
import OurServices from '../OurServices/OurServices';

const OurCard = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./educational.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className="container row row-cols-1 row-cols-md-2 g-4">

            {
                // console.log(services);
                services.map(service => <OurServices key={service.key} service={service} ></OurServices>)
            }

        </div>
    );
};

export default OurCard;