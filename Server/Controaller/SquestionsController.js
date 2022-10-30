import Econnection  from "../server.js";

let postInfo = (req,res)=>{
    const {sNote_on_correction,sCorrection_is_on,sTitle_of_the_course,sPhase,sForwarded_from} = req.body
    let adderToStudentTable = `INSERT INTO studentinfo(forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction) VALUES ('${sForwarded_from}','${sPhase}','${sTitle_of_the_course}','${sCorrection_is_on}','${sNote_on_correction}')`;

    Econnection.query(adderToStudentTable,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("1 record inserted")
        }

        res.end("your information is uploaded!, Thank you")
    })




}

export default postInfo;




