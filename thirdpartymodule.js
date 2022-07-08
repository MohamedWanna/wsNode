const  uuid=require('uuid')

const users=[
    {
        name:'nidhal',
        age:28,
        id: uuid.v4()
    },
    {
        name:'takwa',
        age:20,
        id: uuid.v4()
    },
    {
        name:'mohamed',
        age:33,
        id: uuid.v4()
    },
    {
        name:'samah',
        age:20,
        id: uuid.v4()
    }
]
//console.log(users)
module.exports = users