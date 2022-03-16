import mongoose from "mongoose"

const Post = mongoose.model('Post', {title: String, desc: String})

export const list =  async (req, res) => {
    try {
        const posts = await Post.find();
    
        res.json(posts);
        
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
        const post = await new Post(req.body).save()
        res.json(post);
        
    } catch (error) {
        res.status(400).json({
            message: "khong them duoc "
        })
        
    }
    
}
export const dels =  (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
}
export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
}
