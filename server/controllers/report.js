import Report from '../models/report';
export const reportInsert = async(req,res) =>{

    console.log(req.body);
    
    const {uuid,puid,report,reportname,tname,time} = req.body;
    const detail = new Report({uuid,puid,report,reportname,tname,time})
    try{
      detail.save();
      console.log("PDF Saved");
      res.json({pdf : "Uploaded"});
    }
    catch(err)
    {
      console.log(err);
      res.status(400).send({ok:false});
    }
  }
  
  export const getReport = async(req,res) =>{
   
    const {uuid} = req.body;
    console.log(uuid);
    const detail = await Report.find({uuid}).exec();
    try{
      console.log(detail);
      res.json(detail);
    }
    catch(err)
    {
      console.log(err);
      res.status(400).send({ok:false});
    }
  }