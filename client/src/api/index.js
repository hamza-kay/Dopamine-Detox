import axios from 'axios';
const url = 'http://localhost:5001/activities';

export const fetchActivities = () => axios.get(url);
export const createActivity = (newActivity) => axios.post(url, newActivity);
