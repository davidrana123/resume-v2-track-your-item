import express from "express";
import {
  getItems,
  addItems,
  getItemById,
  editItem,
  deleteItem,
} from "../controller/item-controller.js";

const router = express.Router();

router.get("/", getItems);
router.post("/add", addItems);
router.get("/:id", getItemById);
router.put("/:id", editItem);
router.delete("/:id", deleteItem);

export default router;
