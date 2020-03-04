export default {
  Query: {
    async AllUsers(p, a, { app: { secret, cookieName }, req, postgres, authUtil }, i) {
      const getUsers = {
        text: 'SELECT * FROM portfolio.users'
      }

      const getUsersResults = await postgres.query(getUsers)

      return getUsersResults.rows
    }
  }
}
