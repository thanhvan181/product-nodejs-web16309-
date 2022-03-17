

import User from "../ models/user";

export const signin = async (req, res) => {
    const filer = {email: req.body.email, password: req.body.password};
    try {
       

        const signin = await User.findOne(filer);

         
        // console.log("singin", signin);

        res.json(
            {
                message: "dang nhap thanh cong",

                data: signin 
            }
           
        );
        
    } catch (error) {
        res.status(400).json({
            message: "khong them dc "
        })
        
    }
    // products.push(req.body);
}
export const signup = async (req, res) => {
    try {
        const signup = await new User(req.body).save()
        res.json(
            {
                message: "dang ky thanh cong",

                data: signup 
            }
        );
        
    } catch (error) {
        res.status(400).json({
            message: "khong them dc "
        })
        
    }
    // products.push(req.body);
}