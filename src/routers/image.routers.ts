import express from "express";
import authControllers from "../controllers/auth.controller";
import checkMissingFields from "../middlewares/checkMissingFields.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const imageRouter = express.Router();

imageRouter.post("/upload", checkMissingFields.signup);

export default imageRouter;
