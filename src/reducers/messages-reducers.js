const messages = (state={}, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'MESSAGE_CREATE':
      return payload;
    default:
      return state;
  }
};

export default messages;