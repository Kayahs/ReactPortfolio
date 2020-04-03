import { Pool } from 'pg'
import DE from 'squel'
import config from '../config/default.json'
// import options from '../config/options.json'

const squel = DE.useFlavour('postgres')

const userSeeds = [
  {
    fullname: 'Akshay Manchanda',
    email: 'akshaykmanchanda@gmail.com',
    password: '$2a$12$C3fzh/z1u9PpTxjEPsK1SefXVritcsDfcL6ftQzWSkfgouSKR6BfS'
  }
]

const seed = async () => {
  const pg = await new Pool(config.db).connect()
  try {
    await pg.query('BEGIN')

    console.log('Seeding Users...')

    await Promise.all(
      userSeeds.map(userSeed =>
        pg.query(
          squel
            .insert()
            .into('portfolio.users')
            .setFields(userSeed)
            .toParam()
        )
      )
    )

    console.log('Seeding Users... [DONE]')

    console.log('All Inserts Successful, Commiting Changes...')
    await pg.query('COMMIT')
    console.log('Changes Committed.')
  } catch (e) {
    await pg.query('ROLLBACK')
    throw e
  } finally {
    pg.release()
  }
}

seed().catch(e => {
  setImmediate(() => {
    throw e
  })
})
