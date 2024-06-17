import Joi from "joi";

export const increaseValidator = Joi
    .object({
        customIncrease: Joi.number().min(1).max(1000).messages({
            "number.min": "Number must be greater than 1",
            "number.max": "Number must be less than 1000"
        })
    });
