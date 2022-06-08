export default (state={}, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'PROJECT_FETCH':
      return payload;
    default:
      return state;
  }
};