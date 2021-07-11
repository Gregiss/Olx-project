const {checkSchema} = require('express-validator')

module.exports = {
    signup : checkSchema ({
    
        name: {
            trim: true,
            notEmpty:true,
            isLength:{
                options: {min:2}
            },
            errorMessage: 'Nome precisa ter pelo menos dois caractere'
        },
        email: {
            isEmail:true,
            normalizeEmail:true,
            errorMessage:'Email Invalido'
        },
        password: {
            isLength: {
                options: { min :2}
            },
            errorMessage: 'Senha precisa ter pelo menos 2 caractere'
        },
        state: { 
            notEmpty:true,
            errorMessage: 'Estado não preenchido'
        }        
    }),

    signin: checkSchema({
        email: {
            isEmail:true,
            normalizeEmail:true,
            errorMessage:'Email Invalido'
        },
        password: {
            isLength: {
                options: { min :2}
            },
            errorMessage: 'Senha precisa ter pelo menos 2 caractere'
        }

    })
}