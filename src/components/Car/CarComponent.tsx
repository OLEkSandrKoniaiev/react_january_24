import React, {FC} from 'react';
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";

interface IProps {
    car: ICarWithAuthModel;
}

const CarComponent: FC<IProps> = ({car}) => {
    return (
        <div>
            {car.id} - {car.brand} - {car.year} - {car.price}$
        </div>
    );
};

export default CarComponent;
