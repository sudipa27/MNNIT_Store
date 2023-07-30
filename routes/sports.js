const Sports = require("../models/Sports");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const newSports=new Sports(req.body);
    try 
    {
        const savedSports=await newSports.save();
        res.status(200).json(savedSports);
    } 
    catch(err) 
    {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async(req, res)=>{
    try
    {
        const updatedSports=await Sports.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedSports);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async(req, res)=>{
    try
    {
        await Sports.findByIdAndDelete(req.params.id);
        res.status(200).json("Sport Item has been deleted...");
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET Sports
router.get("/find/:id", async(req, res)=>{
    try
    {
        const sports=await Sports.findById(req.params.id);
        res.status(200).json(sports);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET ALL SPORTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try 
    {
        let sports;
        if (qNew)
        {
            sports=await Sports.find().sort({createdAt: -1}).limit(1);
        }
        else if (qCategory)
        {
            sports=await Sports.find({
                categories: { $in: [qCategory] }
            });
        }
        else
        {
            sports=await Sports.find();
        }

        res.status(200).json(sports);
    } 
    catch(err) 
    {
        res.status(500).json(err);
    }
});

module.exports=router;