import React, {useEffect, useState} from 'react';
import {carService} from "../services/carService";
import CarsComponent from "../components/Cars/CarsComponent";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import styles from "../styles/General.module.css"

const CarsPage = () => {

    const [cars, setCars] = useState<ICarWithAuthModel[]>();

    useEffect(() => {
        carService.getUserCars().then(value => setCars(value?.items));
    }, []);

    return (
        <div className={styles.justifyCenter}>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;
