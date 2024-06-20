import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {TokenObtainPair} from "../../interfaces/TokenObtainPair";
import {IUserModel} from "../../interfaces/IUserModel";
import {authService} from "../../services/auth.service";
import {apiService} from "../../services/api.service";

interface IState {
    me: IUserModel,
    error: boolean
}

let initialState: IState = {
    me: null,
    error: null
};

const login = createAsyncThunk<IUserModel, {user: TokenObtainPair}>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const me = createAsyncThunk<IUserModel, void>(
    'authSlice/me',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authService.me();
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload;
            })
            .addCase(me.fulfilled, (state, action) => {
                state.me = action.payload;
            })
            .addMatcher(isRejected(login), state => {
                state.error = true;
            })
            .addMatcher(isFulfilled(login), state => {
                state.error = false;
            })
});

const {reducer: authReducer, actions} = authSlice;

const authAction = {
    ...actions,
    login,
    me
}

export {
    authReducer,
    authAction
}