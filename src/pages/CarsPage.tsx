import React, {useEffect, useState} from 'react';
import {carService} from "../services/carService";
import CarsComponent from "../components/Cars/CarsComponent";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarWithAuthModel[]>();

    useEffect(() => {
        carService.getUserCars().then(value => setCars(value?.items));
    }, []);

    return (
        <div>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;
