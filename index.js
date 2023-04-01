// import _ from 'lodash'
const _ = require('lodash')

const user = {
  id: 1,
  firstName: 'Test',
  lastName: 'Testowich',
  email: 'test@test.com',
  passw: 'j35dg4dglsjdciof5'
}

const preparedUser = _.omit(user, ['passw'])

console.log('preparedUser :>> ', preparedUser)
