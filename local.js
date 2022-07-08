const getUser=(arr,searchedname)=>{
    if (arr.find((user)=>user.name===searchedname)) {
        return arr.find((user)=>user.name===searchedname)
    } else {
        return ("no user")
    }

}
 const middleAge=(arr)=>{
    return arr.map((el)=>el.age).reduce((acc,curr)=> acc+curr)/arr.length
}
//console.log(module)

module.exports={getUser,middleAge}