// const products = [
//     {id: 1, name: "Product A"},
//     {id: 2, name: "Product B"},

// import mongoose from "mongoose";
import Product from "../ models/product";



// ];
// const Product = mongoose.model('Product', 
// {

//     name: String,
//     price: Number,

   

// } )



export const list =  async (req, res) => {
    try {
        const products = await Product.find();
    
        res.json(products);
        
    } catch (error) {
        res.status(400).json({
            message: "Loi k tim thay san pham"
        })
        
    }
}
export const read = async (req, res) => {
    const filter = {_id: req.params.id};
    try {
        const product = await Product.findOne(filter);
        res.json(product);

        
    } catch (error) {
        res.status(400).json({
            message: "Loi k tim thay san pham"
        })
        
    }

    // res.json(products.find(item => item.id === +req.params.id));

}
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save()
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            message: "khong them dc "
        })
        
    }
    // products.push(req.body);
    // res.json(products);
}
export const dels =   async (req, res) => {
    const condition = {_id: req.params.id};


    try {
        const product = await Product.findOneAndDelete(condition);
        res.json({
            message: "Da xoa thanh cong,",
            data: product,
        }, []);

        
    } catch (error) {
        res.status(400).json({
            message: "khong them dc "
        })
        
    }

    // res.json(products.filter(item => item.id !== +req.params.id));
}
export const update = async (req, res) => {
    const condition = {_id: req.params.id};
    const doc = req.body;
    const opition = {new: true}


    try {
        const product = await Product.findOneAndUpdate(condition, doc, opition);
        res.json({
           
           product
        });

        
    } catch (error) {
        res.status(400).json({
            message: "khong them dc "
        })
        
        
    }
}