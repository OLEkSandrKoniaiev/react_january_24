import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../../models/AuthDataModel";
import {authService} from "../../services/auth.service";


const FormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>({defaultValues: {username: 'Less204', password: 'Pa$$word1'}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false);
    
    const auth = async (formData: AuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    }

    return (
        <div>
            <h3>Login form</h3>
            <div>
                {
                    isAuthState? <span>ok</span> : <span>not ok</span>
                }
            </div>
            <form onSubmit={handleSubmit(auth)}>
                <input type={"text"} {...register("username")}/>
                <input type={"text"} {...register("password")}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default FormComponent;
