/* import { instrumentSchema } from '../schemas/instrumentsSchemas.js'

export const validateInstrument = async (request, response, next) => {
    const { error } = instrumentSchema.validate(request.body, { abortEarly: false })
    if (error) {
        return response.status(400).json({ message: error.message })
    }
    next()
}

export const validateIdInstrument = async (request, response, next) => {
    const { error } = instrumentSchema.validate(request.params, { abortEarly: false })
    if (!id) {
        return response.status(400).json({ message: 'id is required' })
    }
    next()
} */

export const schemaValidator = (schema) => async (request, response, next) => {
    const { error } = schema.validate({
        body: request.body,
        params: request.params,
        query: request.query,
    }, {
        abortEarly: false,
        allowUnknown: true
    })


    error ? next(error) : next()
}