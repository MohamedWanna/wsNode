const users=require('./thirdpartymodule')
const {getUser,middleAge}=require('./local')
console.log(getUser(users,'mohamed'))
console.log(middleAge(users))

//const users=require('./thirdpartymodule')
//const local=require('./local')
//console.log(local.getUser(users,'mohamed'))
//console.log(local.middleAge(users))