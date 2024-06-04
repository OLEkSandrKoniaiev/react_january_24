import React, {FC} from 'react';
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
import CarComponent from "../Car/CarComponent";

interface IProps {
    cars: ICarWithAuthModel[] | undefined;
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars?.map(car =>
                    <CarComponent key={car.id} car={car}/>
                )
            }
        </div>
    );
};

export default CarsComponent;
