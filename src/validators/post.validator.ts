import Joi from "joi";

export const postValidator = Joi
    .object({
        userId: Joi.number().min(1).max(10).required().messages({
            "number.min": "User ID must be grater than 0",
            "number.max": "User ID must be less than 11"
        }),
        title: Joi.string().max(128).required().messages({
            "string.max.base": "Title is too long"
        }),
        body: Joi.string().max(4096).required().messages({
            "string.max.base": "Body is too long"
        })
    })