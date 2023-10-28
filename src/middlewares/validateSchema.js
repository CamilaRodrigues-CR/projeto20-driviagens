import { errors } from "../errors/typeErrors.js"

export function validateSchema(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const error = validation.error.details.map(det => det.message)
            throw errors.validateError(error)
        }

        next()
    }
} 