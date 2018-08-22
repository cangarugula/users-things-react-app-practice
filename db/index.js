const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL, {logging: false})

const User = db.define('user',{
  name: {
    type: Sequelize.STRING
  }
})

const Thing = db.define('thing',{
  name: {
    type: Sequelize.STRING
  }
})

const Posession = db.define('posession', {})

Posession.belongsTo(User)
Posession.belongsTo(Thing)

User.hasMany(Posession)
Thing.hasMany(Posession)

const syncAndSeed = async () => {

  await db.sync({force: true})

  const [moe,larry,curly,joe,shep] = await Promise.all([
    User.create({name: 'moe'}),
    User.create({name: 'larry'}),
    User.create({name: 'curly'}),
    User.create({name: 'joe'}),
    User.create({name: 'shep'})
  ])

  const [foo,bar,bazz] = await Promise.all([
    Thing.create({name: 'foo'}),
    Thing.create({name: 'bar'}),
    Thing.create({name: 'bazz'})
  ])

  await Promise.all([
    Posession.create({userId: moe.id, thingId: foo.id}),
    Posession.create({userId: moe.id, thingId: foo.id}),
    Posession.create({userId: larry.id, thingId: foo.id}),
    Posession.create({userId: larry.id, thingId: bar.id}),
    Posession.create({userId: shep.id, thingId: bazz.id})
  ])
  console.log('syncing and seeding')
}



module.exports = {
  syncAndSeed,
  User,
  Thing,
  Posession
}


