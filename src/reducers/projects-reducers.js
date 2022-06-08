const projects = (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
    case 'PROJECTS_FETCH':
      return payload;
    default:
      return state;
  }
};

export default projects;