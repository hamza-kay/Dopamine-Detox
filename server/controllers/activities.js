import mongoose from 'mongoose';
import activityModel from '../models/Activity.js';

export const getActivity = async (req, res) => {
  try {
    const Activity = await activityModel.find();

    res.status(200).json(Activity);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createActivity = async (req, res) => {
  const { name, description } = req.body;

  const newActivity = new activityModel({ name, description });

  try {
    await newActivity.save();

    res.status(201).json(newActivity);
  } catch (error) {
    console.log('hello');
  }
};

export const updateActivitiy = async (req, res) => {
  const { id: _id } = req.params;
  const activity = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no activity with that id');
  const updatedActivity = await activityModel.findByIdAndUpdate(_id, activity, { new: true });
  res.json(updatedActivity);
};

export const deleteActivity = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no activity with that id: ${id}`);

  await activityModel.findByIdAndRemove(id);

  res.json({ message: 'Activity deleted successfully.' });
};
