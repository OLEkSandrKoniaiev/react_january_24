import React, {useEffect, useState} from 'react';
import styles from "../styles/General.module.css"
import PaginationComponent from "../components/Pagination/PaginationComponent";
import CarsComponent from "../components/Cars/CarsComponent";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import {carService} from "../services/carService";

const CarsPage = () => {

    const [carsObject, setCarsObject] = useState<ICarWithAuthModel[]>()

    useEffect(() => {
        carService.getUserCars().then(value => setCarsObject(value?.items));
    }, []);

    return (
        <div className={styles.justifyCenter}>
            <CarsComponent cars={carsObject}/>
            <PaginationComponent/>
        </div>
    );
};

export default CarsPage;
