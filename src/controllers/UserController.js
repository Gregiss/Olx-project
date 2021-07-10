const State = reqquire('../models/State')

module.exports = {
    getStates: async (req,res) => {
     
        let state = await State.find()
        res.json({ states })
    },
    info: async (req,res) => {

    },
    editAction: async (req,res)=> {

    }

}