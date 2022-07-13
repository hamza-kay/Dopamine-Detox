import mongoose from 'mongoose';

const activitySchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const activityModel = mongoose.model('activitiyModel', activitySchema);

export default activityModel;
