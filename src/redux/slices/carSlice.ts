import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICarModel} from "../../interfaces/ICarModel";
import {IPaginationModel} from "../../interfaces/IPaginationModel";
import {carService} from "../../services/car.service";

interface IState {
    cars: ICarModel[]
}

let initialState: IState = {
    cars: []
}

const getAll = createAsyncThunk<IPaginationModel<ICarModel>, void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload.items;
            })

})

const {reducer: carReducer, actions} = carSlice;

const carAction = {
    ...actions,
    getAll
}

export {
    carReducer,
    carAction
}