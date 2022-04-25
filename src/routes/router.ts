import express from "express";
import processor from "./api/processor";

const routes = express.Router();

routes.get("/api", processor);

export default routes;
