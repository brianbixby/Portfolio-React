import superagent from 'superagent';

export const messageCreate = message => ({
  type: 'MESSAGE_CREATE',
  payload: message,
});

export const messageCreateRequest = message => (dispatch, getState) => {
  return superagent.post(`${process.env.REACT_APP_API_URL}/api/message`)
    .send(message)
    .then(res => {
      dispatch(messageCreate(res.body));
      return res;
    });
};