import Item from "../model/item.js";
import express from "express";

const router = express.Router();

export const getItems = async (request, response) => {
  try {
    const record = await Item.find();
    response.status(200).json(record);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const addItems = async (request, response) => {
  const record = request.body;
  console.log("add item");

  const newRecord = new Item(record);
  try {
    await newRecord.save();
    response.status(201).json(newRecord);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getItemById = async (request, response) => {
  try {
    const record = await Item.findById(request.params.id);
    response.status(200).json(record);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editItem = async (request, response) => {
  let record = await Item.findById(request.params.id);
  record = request.body;

  const editRecord = new Item(record);
  try {
    await Item.updateOne({ _id: request.params.id }, editRecord);
    response.status(201).json(editRecord);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteItem = async (request, response) => {
  try {
    await Item.deleteOne({ _id: request.params.id });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export default router;
