import Record from "../model/record.js";

export const getRecords = async (request, response) => {
  try {
    const record = await Record.find();
    response.status(200).json(record);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const addRecords = async (request, response) => {
  const record = request.body;
  console.log("add record");

  const newRecord = new Record(record);
  try {
    await newRecord.save();
    response.status(201).json(newRecord);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getRecordById = async (request, response) => {
  try {
    const record = await Record.findById(request.params.id);
    response.status(200).json(record);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editRecords = async (request, response) => {
  let record = await Record.findById(request.params.id);
  record = request.body;

  const editRecord = new Record(record);
  try {
    await Record.updateOne({ _id: request.params.id }, editRecord);
    response.status(201).json(editRecord);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteRecord = async (request, response) => {
  try {
    await Record.deleteOne({ _id: request.params.id });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
