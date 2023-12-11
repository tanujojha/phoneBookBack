import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();


router.get("/contacts", async(req, res)=>{
    const response = {status: 0, data: [], errors: [], message: ""};

    const query = {};

    if(req.params.name){
        query.name = {"$regex": req.params.name, "$options": "i"};
    }

    try {

        const data = await Contact.find(query);

        response.data = data;
        response.status = 1;
        response.message = "Fetched contacts successfully"
        
    } catch (error) {
        console.log(error);
        response.status = 0;
        response.message = "Server Error"
        response.errors = error;

    } finally{
        return res.json(response)
    }
});

router.post("/contact", async(req, res)=>{
    const response = {status: 0, data: [], errors: [], message: ""};

    const query = {};

    try {

        const contact = new Contact(req.body);

        const data = await contact.save();
 
        response.data = data;
        response.status = 1;
        response.message = "Created contact successfully"
        
    } catch (error) {
        console.log(error);
        response.status = 0;
        response.message = "Server Error"
        response.errors = error;

    } finally{
        return res.json(response)
    }
});

router.put("/contact/:id", async(req, res)=>{
    const id = req.params.id;
    const response = {status: 0, data: [], errors: [], message: ""};

    const query = {};

    try {

        const contact = await Contact.findByIdAndUpdate(id, req.body, {new: true});
 
        response.data = data;
        response.status = 1;
        response.message = "Update contact successfylly"
        
    } catch (error) {
        console.log(error);
        response.status = 0;
        response.message = "Server Error"
        response.errors = error;

    } finally{
        return res.json(response)
    }
});



export default router