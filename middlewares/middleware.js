const Joi = require("joi");

function loginValidation(req, res, next) {
    const obj = {
        username: req.body.username,
        password: req.body.password
    };

    const validationOfLogin = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$")).required()
    });

    const { error } = validationOfLogin.validate(obj);

    if (error) {
        return res.status(400).send(error.message);  
    }
    
    next();  
}

function signupValidation(req,res,next){
    const signupValidationOperator = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        phone_num: Joi.string().length(10).required(),
        email: Joi.string().email().required(),
        gender: Joi.string().valid("male", "female").required(),
        adress: Joi.string().required(),
        date_of_birth: Joi.date().required(),
        password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$")).required()
    });

    const { error } = signupValidationOperator.validate(req.body);

    if(error){
        return res.status(400).send(error.message); 
    }

    next();
}

module.exports = {loginValidation, signupValidation};
