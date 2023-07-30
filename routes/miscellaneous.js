const Miscellaneous = require("../models/Miscellaneous");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const newMiscellaneous=new Miscellaneous(req.body);
    try 
    {
        const savedMiscellaneous=await newMiscellaneous.save();
        res.status(200).json(savedMiscellaneous);
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
        const updatedMiscellaneous=await Miscellaneous.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedMiscellaneous);
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
        await Miscellaneous.findByIdAndDelete(req.params.id);
        res.status(200).json("Miscellaneous Item has been deleted...");
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET MISCELLANEOUS
router.get("/find/:id", async(req, res)=>{
    try
    {
        const miscellaneous=await Miscellaneous.findById(req.params.id);
        res.status(200).json(miscellaneous);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET ALL MISCELLANEOUS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try 
    {
        let miscellaneous;
        if (qNew)
        {
            miscellaneous=await Miscellaneous.find().sort({createdAt: -1}).limit(1);
        }
        else if (qCategory)
        {
            miscellaneous=await Miscellaneous.find({
                categories: { $in: [qCategory] }
            });
        }
        else
        {
            miscellaneous=await Miscellaneous.find();
        }

        res.status(200).json(miscellaneous);
    } 
    catch(err) 
    {
        res.status(500).json(err);
    }
});

module.exports=router;