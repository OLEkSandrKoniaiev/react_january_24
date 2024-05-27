import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IFormModel} from "../models/IFormModel";


const FormComponent: FC = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<IFormModel>({mode: "all", resolver: joiResolver(postValidator)});

    const savePost = (formValues: IFormModel) => {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: formValues.title,
                body: formValues.body,
                userId: formValues.userId
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((value) => value.json())
            .then((value) => console.log(value));
    }


    return (
        <>
            <form onSubmit={handleSubmit(savePost)}>
                <input type={"number"} {...register("userId")}/>
                {
                    errors.userId && <span>{errors.userId.message}</span>
                }
                <input type={"string"} {...register("title")}/>
                {
                    errors.title && <span>{errors.title.message}</span>
                }
                <input type={"string"} {...register("body")}/>
                {
                    errors.body && <span>{errors.body.message}</span>
                }
                <button disabled={!isValid}>send post</button>
            </form>
        </>
    );
};

export default FormComponent;