import mongoose from "mongoose";

const { Schema } = mongoose;

const menuSchema = new Schema({
    name:{type:String, required: true},
    image:{type:String, required: true},
    price:{type:Number, required:true},
});

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);

export default Menu;