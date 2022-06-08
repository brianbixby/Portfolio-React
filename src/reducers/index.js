import { combineReducers } from 'redux';
import messages from './messages-reducers';
import projects from './projects-reducers';
import currentProject from './currentProject-reducers';

export default combineReducers({
  messages,
  projects,
  currentProject,
});