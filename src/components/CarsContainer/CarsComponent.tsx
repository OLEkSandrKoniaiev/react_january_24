import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {carAction} from "../../redux/slices/carSlice";
import CarComponent from "./CarComponent";

const CarsComponent = () => {
    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carAction.getAll())
    }, [dispatch]);

    return (
        <div>
            CarsComponent
            {cars.map(car => <CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsComponent;