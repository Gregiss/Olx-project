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

    }

}