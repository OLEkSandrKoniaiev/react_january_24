import React from 'react';
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    password: string,
    age: number
}


const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: "all"
    });

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type={"text"} {...register('username',
                        {
                            required: true,
                            minLength: {value: 1, message: "name is too short"},
                        })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label>
                    <input type={"text"} {...register('password',
                        {
                            required: true,
                            minLength: {value: 4, message: "pass too short"},
                            maxLength: {value: 6, message: "pass too long"}
                        })}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label>
                    <input type={"number"} {...register('age',
                        {
                            required: true,
                            valueAsNumber: true,
                            min: {value: 1, message: "age is too small"},
                            max: {value: 120, message: "age is too big"}
                        })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );

};

export default FormComponent;