import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {TokenObtainPair} from "../interfaces/TokenObtainPair";
import {authService} from "../services/auth.service";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const {
        register,
        handleSubmit
    } = useForm<TokenObtainPair>();
    const [error, setError] = useState<boolean>(null);
    const navigate = useNavigate();

    const registerUser:SubmitHandler<TokenObtainPair> = async (user) => {
        try {
            await authService.register(user);
            setError(false);
            navigate('/login');
        } catch (e) {
            setError(true);
        }
    };

    return (
        <div>
            RegisterPage
            <form onSubmit={handleSubmit(registerUser)}>
                <input type={'text'} placeholder={'username'} {...register('username')}/>
                <input type={'text'} placeholder={'password'} {...register('password')}/>
                <button>Register</button>
            </form>
            {error && <div>Username already exist</div>}
        </div>
    );
};

export default RegisterPage;