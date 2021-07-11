const {validationResult,matchedData} = require('express-validator')

const User = require('../models/User')
const State = require('../models/State')

module.exports = {
    signin: async (req,res) => {

    },
    signup: async (req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            req.json({error: errors.mapped()})
            return
        }
        
        const data= matchedData(req)
        
        //Verificando se o email já existe
        const user = await User.findOne({
            email: data.email
        })
        if(user) {
            res.json({
                error:{email:{msg:'Email já existe!'}}
            })
            return
        }
        //Verificando se o estado já existe
        
        const stateItem = await State.findById(data.State)
        if(!stateItem) {
            res.json({
                error: {state:{msg: 'Estado não existe'}}
            })
            return
        }
        

        res.json({tudocerto: true, data})
    },
}