const Joi = require("joi");

function validateLogin(req, res, next) {
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

module.exports = {validateLogin};
