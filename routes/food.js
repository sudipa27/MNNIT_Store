const Food = require("../models/Food");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const newFood=new Food(req.body);
    try 
    {
        const savedFood=await newFood.save();
        res.status(200).json(savedFood);
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
        const updatedFood=await Food.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedFood);
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
        await Food.findByIdAndDelete(req.params.id);
        res.status(200).json("Food item has been deleted...");
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET FOOD ITEM
router.get("/find/:id", async(req, res)=>{
    try
    {
        const sports=await Food.findById(req.params.id);
        res.status(200).json(sports);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

//GET ALL FOOD ITEMS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try 
    {
        let items;
        if (qNew)
        {
            items=await Food.find().sort({createdAt: -1}).limit(1);
        }
        else if (qCategory)
        {
            items=await Food.find({
                categories: { $in: [qCategory] }
            });
        }
        else
        {
            items=await Food.find();
        }

        res.status(200).json(items);
    } 
    catch(err) 
    {
        res.status(500).json(err);
    }
});

module.exports=router;