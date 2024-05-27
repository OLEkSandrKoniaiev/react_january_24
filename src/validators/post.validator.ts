import Joi from "joi";

export const postValidator = Joi
    .object({
        userId: Joi.number().min(1).max(999999).required().messages({
            "number.base": "user id must be a num",
            "number.min.base": "user id is unavailable",
            "number.max.base": "user id is too big",
            "number.required.base": "used id is required"
        }),
        title: Joi.string().pattern(/.*\b\w+\b.*/).max(256).required().messages({
            "string.pattern.base": "title must contain at least one word",
            "string.max.base": "title is too long",
            "string.required.base": "title is required"
        }),
        body: Joi.string().pattern(/.*\b\w+\b.*/).max(65536).required().messages({
            "string.pattern.base": "body must contain at least one word",
            "string.max.base": "body is too long",
            "string.required.base": "body is required"
        })
    })