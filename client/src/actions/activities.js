import * as api from '../api';

export const getActivities = () => async (dispatch) => {
  try {
    const { data } = await api.fetchActivities();

    dispatch({ type: 'FETCH_ACTIVITIES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createActivity = (activity) => async (dispatch) => {
  try {
    const { data } = await api.createActivity(activity);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
