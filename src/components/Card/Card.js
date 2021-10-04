import React, { useEffect, useState } from 'react';
import OurServices from '../OurServices/OurServices';
import Service from '../Service/Service';


const Card = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./educational.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)));
    }, []);
    console.log(services);

    return (
        <div className="container row row-cols-1 row-cols-md-2 g-4">

            {
                // console.log(services);
                services.map(service => <Service key={service.key} service={service} ></Service>)
            }

        </div>
    );
};

export default Card;