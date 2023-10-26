import { validateError } from "../errors/validatesErrors.js"

export function validateSchema(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(det => det.message)
            throw validateError(errors)
        }

        next()
    }
}