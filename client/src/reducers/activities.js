const activities = (activities = [], action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITIES':
      return action.payload;
    case 'CREATE':
      return [...activities, action.payload];
    default:
      return activities;
  }
};

export default activities;
