import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import Promise from 'bluebird'

export default {
  Mutation: {
    async login(
      p,
      { input: { email, password } },
      { app: { secret, cookieName, salt }, req, postgres, authUtil },
      i
    ) {
      try {
        const emailLC = email.toString().toLowerCase()

        const findUserQ = {
          text: 'SELECT * FROM portfolio.users WHERE email = $1',
          values: [emailLC]
        }

        const findUserR = await postgres.query(findUserQ)
        const user = findUserR.rows[0]

        if (!user) throw 'Invalid email or password.'
        const valid = bcrypt.compareSync(password, user.password)
        if (!valid) throw 'Invalid email or password.'

        const csrfTokenBinary = await Promise.promisify(crypto.randomBytes)(32)
        const csrfToken = Buffer.from(csrfTokenBinary, 'binary').toString('base64')
        authUtil.setCookie(cookieName, authUtil.generateToken(user, secret, csrfToken), req.res)

        return {
          user,
          csrfToken
        }
      } catch (e) {
        return { message: e.message || e }
      }
    }
  }
}
