import Econnection  from "../server.js";

let postInfo = (req,res)=>{
    const {note_on_correction,correction_is_on,title_of_the_course,phase,forwarded_from} = req.body
    let contentAdder = `INSERT INTO forquery(forwarded_from,phase,title_of_the_course,correction_is_on,note_on_correction) VALUES ('${forwarded_from}','${phase}','${title_of_the_course}','${correction_is_on}','${note_on_correction}')`;

    Econnection.query(contentAdder,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("1 record inserted")
        }

        res.end("your information is uploaded!, Thank you")
    })




}

export default postInfo;




