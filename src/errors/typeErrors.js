
// erros de validações com Joi
function validateError(item){
    return {message:`${item}`, type:"validateError"}
}

// erro de conflito (já existe)
 function alreadyExistError(item){
    return {message:`Essa ${item} já está cadastrada`, type:"alreadyExistError"}
}

//erro de não encontrado
function notFoundError(message){
    return {message, type:"notFoundError"}
}

//erro de conflito (valores iguais)
function equalValuesError(message){
    return {message, type:"equalValuesError"}
}

//erro de conflito (valores iguais)
function datesEqualsError(item){
    return {message: `A ${item} deve ser uma data futura`, type:"datesEqualsError"}
}

export const errors = {validateError, alreadyExistError, notFoundError, equalValuesError, datesEqualsError}