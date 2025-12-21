import express from "express";
import { createUserAddress, updateUserAddress, deleteUserAddress, readUserAddress, readAllUserAddresses } from "../controllers/userAddress.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, readAllUserAddresses);
router.get("/:id", auth, readUserAddress);
router.post("/create", auth, createUserAddress);
router.put("/update/:id", auth, updateUserAddress);
router.delete("/delete/:id", auth, deleteUserAddress);    

export default router;