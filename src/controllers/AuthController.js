const mongooose = require('mongoose')
const bcrypt = require('bcrypt')

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
        if(mongoose.Types.ObjectId.isValid(data.state)) {
        const stateItem = await State.findById(data.State)
        if(!stateItem) {
            res.json({
                error: {state:{msg: 'Estado não existe'}}
            })
            return
        }
    }  else {
        res.json({
            error: {state:{msg: 'Codigo de estado invalido'}}
        })
        return

    }

       const passwordHash = await bcrypt.hash(data.password, 10)

       const payload = (Data.now() = Math.random()).toString()
       const token = await bcrypt.hash(payload, 10)

       const newUser = new User({
           name: data.name,
           email: data.email,
           passwordHash,
           token: token,
           state: data.state

       })
       await newUser.save()

        res.json({token})
    },
}