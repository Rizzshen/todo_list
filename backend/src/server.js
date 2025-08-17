const express = require("express");
const path = require("path");
const cors = require("cors")
const app = express();

const dotenv = require("dotenv")
dotenv.config();

const connectDB = require("./db/database");
connectDB();

app.use(cors());

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "../frontend")));

const todoRoutes = require("./routes/todoRoute");
app.use("/api/todo/", todoRoutes);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`LISTENNING TO PORT: http://localhost:${process.env.PORT}`);
})


