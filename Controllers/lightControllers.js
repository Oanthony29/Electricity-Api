import  lightModel  from "../Models/lightModel.js";

export const allData = async(req, res)=>{
    try{
        const TotalRec = await lightModel.findAll();
        res.status(200).json({
            message: "All request created"  + TotalRec.length,
            data: TotalRec
        });
    }catch(e){
        res.status(404).json({
            message: e.message
        });
    }
}

export const newRequest = async (req, res)=>{
    try{
        const create = await lightModel.create(req.body)
        res.status(200).json({
            message: 'created sucessfully.',
            data: create
        })
    }catch(e){
        res.status(404).json({
            message: e.message
        })
    }
}

export const singleRequest = async(req, res)=>{
    try{
        let id =req.params.id
        const oneRec = await lightModel.findAll({where: {id: id}})
        if(oneRec.length === 0){
            res.status(404).json({
                message: `No such id: ${id}`
            });
        }else{
            res.status(200).json({
                message: `Below is your requested id: ${id}.`,
                data:oneRec
            });
        }
    }catch(e){
        res.status(500).json({
            message: e.message
        })
    }
}


export const deleteReq = async (req, res)=>{
   try{
    let id = req.params.id
    const remove = await lightModel.destroy({where: {id:id}})
    if(remove === 0){
        res.status(404).json({
            message: `No such id: ${id}`
        });
    }else{
        res.status(200).json({
            message: `Below is your requested id: ${id}.`,
            data:remove
        });
    }
   }catch(e){
    res.status(500).json({
        message: e.message
    })
   }
}

export  const updatedreq = async (req, res)=>{
    try{
        let id = req.params.id
        const updatedRec = await lightModel.update(req.body, {where: {id: id}})
        if(updatedRec[0] === 0){
            res.status(404).json({
                message: `No such id: ${id}`
            });
        }else{
            res.status(200).json({
                message: `Sucessfully updated id: ${id}.`,
                data:updatedRec
            });
        }
    }catch(e){
        res.status(404).json({
            message: e.message
        })
    }
}
