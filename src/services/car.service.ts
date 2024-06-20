import {IResponce} from "../types/responceType";
import {ICarModel} from "../interfaces/ICarModel";
import {IPaginationModel} from "../interfaces/IPaginationModel";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const carService = {
    getAll: (): IResponce<IPaginationModel<ICarModel>> => {
        return apiService.get(urls.cars.base);
    }
};

export {
    carService
}