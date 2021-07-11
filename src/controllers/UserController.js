const {validationResult,matchedData} = require('express-validator')

const State = reqquire('../models/State')
const User = require('../models/Users')
const Category = require('../models/Category')
const Ad = require('../models/Ad')

module.exports = {
    getStates: async (req,res) => {
     
        let state = await State.find()
        res.json({ states })
    },
    info: async (req,res) => {
        let token = req.query.token

        const user = await User.findOne({token})
        const state = await State.findById(user.state)
        const ads = await Ad.find({idUser: user._toString()})

        let adList= []
        for(let i in ads){
            const cat = await Category.findById(ads[i].category)
                        
           // adLista.push({
            //    id: ad[i]._id,
             //   status:ads[i].status,
             //   images:ads[i]images,
             //   date.Created: ads[i]dateCrated,
             //   title: ads.title,
             //   price:ads.price,
              //  priceNegotiable:ads[i].priceNegotiable,
             //   description:ads[i].description,
              //  views:ads[i].views,
              //  category:ads[i].category,
              //  category: cat.slug

           // })
                 
            adList.push({...ads[i], category:cat.slug})
        }
        res.json({
          name: user.name,
          email: user.email,
          state: user.name,
          ads:adList

        })
    },
    editAction: async (req,res)=> {
        
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            req.json({error: errors.mapped()})
            return
        }
        
        const data= matchedData(req)


        const User = await User.findOne({token: data.token})
        

        let updates ={}

        if(date.name) {
            updates.name = data.name
        }

        if(data.email){
            const emailcheck = await User.findOne({email: data.email})
            if(emailcheck){
                res.json({error:'Email já existente'})
                return
            }
            updates.email= data.email
        }

        await User.findOneAndUpadate({token: data.token},{$set: updates})
        res.json({})

    }

}