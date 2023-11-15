import AppModel from "../model/app-model-native.js";

export const getTodos = async (request, response) => {
  try {
    const record = await AppModel.find();
    response.status(200).json(record);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const addTodos = async (request, response) => {
  const record = request.body;
  const newRecord = new AppModel(record);
  try {
    await newRecord.save();
    response.status(201).json(newRecord);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getTodosById = async (request, response) => {
  try {
    const record = await AppModel.findById(request.params.id);
    response.status(200).json(record);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editTodos = async (request, response) => {
  let record = await AppModel.findById(request.params.id);
  record = request.body;

  const editRecord = new AppModel(record);
  try {
    await AppModel.updateOne({ _id: request.params.id }, editRecord);
    response.status(201).json(editRecord);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteTodos = async (request, response) => {
  try {
    await AppModel.deleteOne({ _id: request.params.id });
    response.status(201).json("Todo deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
