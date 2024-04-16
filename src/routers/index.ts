import express from "express";
import authRouter from "./auth.routers";
import imageRouter from "./image.routers";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/image", imageRouter);

export default router;
