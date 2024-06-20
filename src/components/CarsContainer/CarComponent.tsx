import React, {FC, PropsWithChildren} from 'react';
import {ICarModel} from "../../interfaces/ICarModel";

interface IProps extends PropsWithChildren {
    car: ICarModel
}

const CarComponent: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;

    return (
        <div>
            CarComponent
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export default CarComponent;