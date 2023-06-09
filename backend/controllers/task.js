import { Task } from "../models/task.js";
import ErrorHandler from "../middlewares/error.js";

export const newTask = async (req, res, next) => {
  try {
    const { title } = req.body;
    const task = await Task.create({
      title,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task Added successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTask = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const task = await Task.find({ user: userid });

    res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    next(error);
  }
};
export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return next(new ErrorHandler("Invalid Task Id", 404));

    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json({
      success: true,
      message: "Task Updated",
    });
  } catch (error) {
    next(error);
  }
};
export const deletetask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return next(new Error("Invalid Task Id", 404));

    task.isCompleted = !task.isCompleted;
    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "Task deleted",
    });
  } catch (error) {
    next(error);
  }
};
