import express from "express";
import { allData, deleteReq, newRequest, singleRequest, updatedreq } from "../Controllers/lightControllers.js";

const Router = express.Router();
Router.get("/result", allData)
Router.get("/result/:id", singleRequest)
Router.post("/result", newRequest)
Router.delete("/result/:id", deleteReq)
Router.patch("/result/:id", updatedreq)

export default Router;