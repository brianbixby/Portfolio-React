import superagent from 'superagent';

export const projectFetch = project => ({
  type: 'PROJECT_FETCH',
  payload: project,
});

export const projectsFetch = projects => ({
  type: 'PROJECTS_FETCH',
  payload: projects,
});

export const projectFetchRequest = url => dispatch => {
  return superagent.get(`${process.env.REACT_APP_API_URL}/api/project/${url}`)
    .then(res => {
      dispatch(projectFetch(res.body));
      return res.body;
    });
};

export const projectsFetchRequest = () => dispatch => {
  return superagent.get(`${process.env.REACT_APP_API_URL}/api/projects`)
    .then(res => {
      dispatch(projectsFetch(res.body));
      return res.body;
    });
};