import express from "express";
import {
  getRecords,
  addRecords,
  getRecordById,
  editRecords,
  deleteRecord,
} from "../controller/records-controller.js";

const router = express.Router();

router.get("/", getRecords);
router.post("/add", addRecords);
router.get("/:id", getRecordById);
router.put("/:id", editRecords);
router.delete("/:id", deleteRecord);

export default router;
