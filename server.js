import("./Config/dbConfig.js");
import express from "express";
import Router from "./Routes/lightRoute.js";

const app = express();
app.use(express.json());
app.use("/api/v1",Router)

 const port = 4040;
app.listen(port, ()=>{
    console.log(`listing to port...: ${port}`)
})