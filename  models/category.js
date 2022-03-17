
   
import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true});

export default mongoose.model("Category", categorySchema);
// export default mongoose.model("Category", cateSchema )