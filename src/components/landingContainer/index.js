import React, { useEffect  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { projectsFetchRequest, projectFetchRequest } from '../../actions/project-actions.js';
import { imgObj, smallImgObj, logError, renderIf } from './../../lib/util.js';

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
                    <Link to={`/project/${project.url}`}>
                        <div className='tileWrapper'>
                        <img 
                        fetchpriority="high"
                        style={{ "width" : "100%", "height": "auto" }}
                        src={imgObj[project.image]}
                        srcSet={`${smallImgObj[project.image]} 464w, ${imgObj[project.image]} 825w, ${smallImgObj[project.image]} 464w`}
                        sizes={"(maxWidth: 480) 100vw, (maxWidth: 767) 100vw, 33.3333vw"}
                        alt="project screen shot" />
                        <div className='tileInner'>
                            <div className='text'>
                            <p className='projectName'>{project.name} </p>
                            <p className='projectDesc'>{project.shortDesc} </p>
                            </div>
                        </div>
                        </div>
                    </Link>
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