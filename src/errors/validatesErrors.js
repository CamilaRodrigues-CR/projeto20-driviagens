
// erros de validações com Joi
function validateError(item){
    return {message:`${item}`, type:"validateError"}
}

// erros na rota Cities
 function alreadyExistError(item){
    return {message:`Essa ${item} já está cadastrada`, type:"alreadyExistError"}
}

export const errors = {validateError, alreadyExistError}