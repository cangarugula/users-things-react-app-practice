const router = require('express').Router()
const {User,Thing,Posession} = require('../db')

router.get('/api', async (req, res, next)=> {
  try{
    let users = await User.findAll({
      include: [{
        model: Posession,
        include: [ Thing ]
      }]
    })

    res.send(users)
  } catch (err) {
    next(err)
  }
})

router.get('/api/users', async (req,res,next) => {
  try {
    let users = await User.findAll({
      include: [{
        model: Posession,
        include: [Thing]
      }]
    })
    let noThings = users.filter(user => {
      return user.posessions.length
    })
    res.send(noThings)

  } catch (err) {
    next(err)
  }
})




module.exports = router
