import express from "express";
import mongoose from "mongoose";
import auctionRouter from "./book"
import lotRouter from "./author";

//новий екземпляр додатку 
const app = express();

//параметри бази даних і сервера
const dbName="auctionDB";
const dbUrl = `mongodb://localhost:27017/${dbName}`;
const port = 5000;

//підключення до бази даних
mongoose.connect (dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>{console.log(`Сonnected to DB ${dbUrl}`)})
.catch(error=>{console.log(error)});

//додаткові методи для обробки запитів POST і PUT 
app.use(express.json());
app.use(express.urlencoded());

//маршрутизація
//app.use("*", (req,res)=>{res.send(`Node JS test server`)});
app.use("/lot", lotRouter);
//запуск сервера 
app.listen(port);

console.log(`Server started at http://localhost:${port}`);