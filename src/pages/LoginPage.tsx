import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {TokenObtainPair} from "../interfaces/TokenObtainPair";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {authAction} from "../redux/slices/authSlice";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {
        register,
        handleSubmit
    } = useForm<TokenObtainPair>();
    const {error} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const login: SubmitHandler<TokenObtainPair> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authAction.login({user}));
        if (requestStatus === 'fulfilled') {
            navigate('/cars')
        }
    }

    return (
        <div>
            LoginPage
            <form onSubmit={handleSubmit(login)}>
                <input type={'text'} placeholder={'username'} {...register('username')}/>
                <input type={'text'} placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
            {error && <div>Username or password is incorrect</div>}
        </div>
    );
};

export default LoginPage;