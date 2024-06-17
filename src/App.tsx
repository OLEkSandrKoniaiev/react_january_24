import React, {useState} from 'react';
import styles from './App.module.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {customIncrement, decrement, increment, reset} from "./slices/slice1";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {increaseValidator} from "./validators/increase.validator";


const App = () => {

    const value = useAppSelector((state) => state.slice1.value);

    const dispatch = useAppDispatch();

    // form
    const {
        formState: {errors, isValid},
        handleSubmit,
        register
    } = useForm<{ customIncrease: number }>({mode: "all", resolver: joiResolver(increaseValidator)})

    const [customIncrease, setCustomIncrease] = useState<number>(0);

    const submitHandler = (formValues: { customIncrease: number }) => {
        setCustomIncrease(formValues.customIncrease);
    }

    return (
        <div className={styles.mainBlock}>
            <form onSubmit={handleSubmit(submitHandler)} className={styles.formBlock}>
                <input type={"number"} {...register("customIncrease")}/>
                {
                    errors.customIncrease && <span>{errors.customIncrease.message}</span>
                }
                <button disabled={!isValid}>submit</button>
            </form>
            <div className={styles.numberBlock}>
                <h2>{value}</h2>
                <button onClick={() => {
                    dispatch(increment());
                }}>
                    increment
                </button>
                <button onClick={() => {
                    dispatch(customIncrement(customIncrease));
                }}>
                    custom increment
                </button>
                <button onClick={() => {
                    dispatch(decrement());
                }}>
                    decrement
                </button>
                <button onClick={() => {
                    dispatch(reset());
                }}>
                    reset
                </button>
            </div>
        </div>
    );
};

export default App;
