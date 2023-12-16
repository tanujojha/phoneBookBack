import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/, // Basic email format validation
    },
    number: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    address: {
        type: String,
        default: null
    },
    status: {
        // {
        //     0: Inactive
        //     1: Active
        // }
        type: Number,
        default: 1,
    }

}, {timestamps: true});

contactSchema.plugin(uniqueValidator);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;



