const Swags = require("../models/Swags");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const newSwags=new Swags(req.body);
    try 
    {
        const savedSwags=await newSwags.save();
        res.status(200).json(savedSwags);
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
        const updatedSwags=await Swags.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedSwags);
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
        await Swags.findByIdAndDelete(req.params.id);
        res.status(200).json("Swag has been deleted...");
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET SWAGS
router.get("/find/:id", async(req, res)=>{
    try
    {
        const swags=await Swags.findById(req.params.id);
        res.status(200).json(swags);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET ALL SWAGS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try 
    {
        let swags;
        if (qNew)
        {
            swags=await Swags.find().sort({createdAt: -1}).limit(1);
        }
        else if (qCategory)
        {
            swags=await Swags.find({
                categories: { $in: [qCategory] }
            });
        }
        else
        {
            swags=await Swags.find();
        }

        res.status(200).json(swags);
    } 
    catch(err) 
    {
        res.status(500).json(err);
    }
});

module.exports=router;