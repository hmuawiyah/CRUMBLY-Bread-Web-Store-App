import express from "express";
import midtransNotification from "../controllers/midtrans.controller.js";

const router = express.Router();

router.post("/notification", midtransNotification);

export default router;
