import Econnection from '../server.js'

let allFromStaff = (req,res,next)=>{
    let allDatafromStaff = "SELECT * FROM forquery"

    Econnection.query(allDatafromStaff,(err,dataFromStaff)=>{
          if(err){
                throw err
          }else{
                console.log(dataFromStaff)
                res.send(dataFromStaff)

          }
    })
   
}

export default allFromStaff