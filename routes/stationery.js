const Stationery = require("../models/Stationery");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const newStationery=new Stationery(req.body);
    try 
    {
        const savedStationery=await newStationery.save();
        res.status(200).json(savedStationery);
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
        const updatedStationery=await Stationery.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedStationery);
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
        await Stationery.findByIdAndDelete(req.params.id);
        res.status(200).json("Stationery Item has been deleted...");
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET STATIONERY
router.get("/find/:id", async(req, res)=>{
    try
    {
        const stationery=await Stationery.findById(req.params.id);
        res.status(200).json(stationery);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET ALL STATIONERY
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try 
    {
        let stationery;
        if (qNew)
        {
            stationery=await Stationery.find().sort({createdAt: -1}).limit(1);
        }
        else if (qCategory)
        {
            stationery=await Stationery.find({
                categories: { $in: [qCategory] }
            });
        }
        else
        {
            stationery=await Stationery.find();
        }

        res.status(200).json(stationery);
    } 
    catch(err) 
    {
        res.status(500).json(err);
    }
});

module.exports=router;