import * as Joi from 'joi';

export const USUARIO_SCHEMA =Joi.object().keys({
    nombre: Joi.string().required().regex(/^[a-zA-Z]{3-30}$/).min(3).max(30),
    apellido: Joi.string().required(),
    edad: Joi.number().integer().greater(18).less(40)

});