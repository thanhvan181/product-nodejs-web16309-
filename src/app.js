import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productRoute from '../routes/product';
import postRoute from "../routes/post";
import userRouter from "../routes/user";
import cateRouter from "../routes/cate"


const app = express();
// middleware
app.use(cors());
app.use(morgan('tiny'));
//mot midddwares
app.use(express.json());

app.use("/api",productRoute);

app.use("/api",postRoute);
app.use("/api", userRouter);
app.use("/api", cateRouter);
//route

//connect database
mongoose.connect('mongodb://localhost:27017/we16309')
.then(() => {
    console.log("ket noi db thanh cong");
    
})
.catch((error) => console.log(error))


const PORT = 3003;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})