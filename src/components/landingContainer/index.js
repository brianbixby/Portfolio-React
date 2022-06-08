import React from 'react';
import { connect } from 'react-redux';

import { projectsFetchRequest, projectFetchRequest } from '../../actions/project-actions.js';
import { logError, renderIf } from './../../lib/util.js';
import Tile from '../tile';
import './../../style/main.scss';

class LandingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  componentWillMount() {
    this.props.projectsFetch()
      .catch(err => logError(err));
    window.scrollTo(0, 0);
  }

  render() {
    let { projects } = this.props;
    return(
      <div className='pageContent homePageContent'>
        <div className='headline'>
          <div className='container'>
            <div className='descContainer'>
              <p className='name'>Brian Bixby </p>
              <p className='title'>Front End Developer</p>
            </div>
          </div>
        </div>
        {renderIf(projects && projects.length,
            <div className='tileContainer'>
                {projects.map(project => {
                    return <div className='tileOuter' key={project._id}>
                    <Tile project={project} />
                    </div>
                })}
            </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  projects: state.projects,
});

let mapDispatchToProps = dispatch => ({
  projectsFetch: () => dispatch(projectsFetchRequest()),
  projectFetch: url => dispatch(projectFetchRequest(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);