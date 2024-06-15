import React, {useEffect, useState} from 'react';
import styles from "../styles/General.module.css"
import PaginationComponent from "../components/Pagination/PaginationComponent";
import classNames from "classnames";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";
import {carService} from "../services/carService";
import CarsComponent from "../components/Cars/CarsComponent";


const CarsPage = () => {

    const [query, setQuery] = useSearchParams({
        page: '1'
    });

    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        prev: null,
        next: null,
        total_items: 0,
        total_pages: 0
    });

    useEffect(() => {
        carService.getUserCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarsPaginatedObject(value);
            }
        });
    }, [query]);

    return (
        <div className={classNames(styles.justifyContent, styles.columnAlignCenter)}>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent next={carsPaginatedObject.next} prev={carsPaginatedObject.prev}/>
        </div>
    );
};

export default CarsPage;
