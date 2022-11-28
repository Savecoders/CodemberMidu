
const fs = require('fs');
const input = fs.readFileSync('users.txt', 'utf8');
const users = input.trim().split('\n\n');
let totalUsers = 0


const isCompletedDateUser = (dataUser) => {
  const dataOfUser = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
  return dataUser.reduce((acc, data) => {
    const dataUser = data.split(' ').filter((data) => dataOfUser.includes(data.split(':')[0]))
    if (dataUser.length >= dataOfUser.length) {
      acc.push(dataUser)
    }
    return acc
  }, [])
}

const filteredUsers = (strData) => {
  const regex = /\n/g
  const RegexDataUsers = strData.map((data) => {
    data = data.replace(regex, ' ')
    return data
  })

  console.log(RegexDataUsers.length)
  return RegexDataUsers
}

const usersValues = isCompletedDateUser(filteredUsers(users))
totalUsers = usersValues.length

console.log(`${usersValues[usersValues.length - 1]} and ${totalUsers} users`)
