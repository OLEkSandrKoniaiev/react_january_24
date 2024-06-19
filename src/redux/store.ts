import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "./slices/postSlice";

export const store = configureStore({
   reducer: {
       userSlice: userSlice.reducer,
       postSlice: postSlice.reducer
   }
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
