// const products = [
//     {id: 1, name: "Product A"},
//     {id: 2, name: "Product B"},

import mongoose from "mongoose";

// ];
const Product = mongoose.model('Product', {name: String})



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
export const read = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));

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
export const dels =  (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
}
export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
}