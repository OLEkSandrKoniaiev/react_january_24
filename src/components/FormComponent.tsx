import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IFormModel} from "../models/IFormModel";
import styles from "./Form.module.css"
import {postPost} from "../services/post.api.service";


const FormComponent: FC = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<IFormModel>({mode: "all", resolver: joiResolver(postValidator)});

    // const savePost = (formValues: IFormModel) => {
    //
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: formValues.title,
    //             body: formValues.body,
    //             userId: formValues.userId
    //         }),
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((value) => value.json())
    //         .then((value) => console.log(value));
    // }

    // const [myForm, setMyForm] = useState<IFormModel>();
    //
    // const submitForm = async (formValues: IFormModel) => {
    //     const response =  await postPost(formValues);
    //     setMyForm(response.data);
    //     console.log(myForm);
    // }

    return (
        <>
            <form onSubmit={handleSubmit(postPost)} className={styles.formContainer}>
                <div>
                    <input type={"number"} {...register("userId")}/>
                    {
                        errors.userId && <span>{errors.userId.message}</span>
                    }
                </div>
                <div>
                    <input type={"string"} {...register("title")}/>
                    {
                        errors.title && <span>{errors.title.message}</span>
                    }
                </div>
                <div>
                    <input type={"string"} {...register("body")}/>
                    {
                        errors.body && <span>{errors.body.message}</span>
                    }
                </div>
                <button disabled={!isValid}>send post</button>
                {/*{myForm && (<h3>{myForm.userId}, {myForm.title}, {myForm.body}</h3>)}*/}
            </form>
        </>
    );
};

export default FormComponent;