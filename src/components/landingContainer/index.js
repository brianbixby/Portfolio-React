import React, { useEffect, lazy  } from 'react';
import { connect } from 'react-redux';

import { projectsFetchRequest, projectFetchRequest } from '../../actions/project-actions.js';
import { logError, renderIf } from './../../lib/util.js';
const Tile = lazy(() => import('../tile'));

function LandingContainer({projects, projectsFetch }) {
    useEffect(() => {
        projectsFetch()
            .then(() => window.scrollTo(0, 0))
            .catch(err => logError(err));
    }, [projectsFetch]);

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

const mapStateToProps = state => ({ projects: state.projects });
const mapDispatchToProps = dispatch => ({
    projectsFetch: () => dispatch(projectsFetchRequest()),
    projectFetch: url => dispatch(projectFetchRequest(url)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);