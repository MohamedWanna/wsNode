//console.log(global)
//core module=>module installed with node.js; functions & other information find them with object[global]

//console.log(__dirname)
//console.log(__filename)

//const path= require('path')
//console.log(path.extname(__filename))
//=>.js

//const path= require('path')
//console.log(path.dirname(__filename))
//the file path of th folder

//const path= require('path')
//console.log(path.parse(__filename))
//=>root:'C:\\',
//base:'core.js',
//ext:'js',
//name:'core'

//*******************************************************************************************/
//syn
//const fs=require('fs')
//step 1
//console.log('start')
//step 2
//const data= fs.readFileSync('file.txt', 'utf-8')
//console.log(data.toString())
//step 3
//console.log('finish')

//*******************************************************************************************/
//asyn
//const fs=require('fs')
//step 1
//console.log('start')
//step 2
//fs.readFile('file.txt','utf-8',(err,data)=>{
    //if (err) {
        //console.log(err)
        
    //}
    //console.log(data)
//})
//step 3
//console.log('finish')

//os
const os=require('os')
//console.log(os.cpus())
//console.log(os.arch())
//console.log(os.totalmem())
console.log(os.freemem())







