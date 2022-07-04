import React, { useEffect, lazy } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import { projectFetchRequest } from '../../actions/project-actions.js';
import { imgObj, logError, renderIf, classToggler } from './../../lib/util.js';
// import { imgObj, smallImgObj, logError, renderIf } from './../../lib/util.js';
const Footer2 = lazy(() => import('../footer2'));

function ProjectItemContainer({ currentProject, projectFetch, params}) {
    const myRef = React.createRef();
    const executeScroll = () => myRef.current.scrollIntoView();
    const { projectName } = useParams();
    useEffect(() => {
        projectFetch(projectName)
            .then(() => window.scrollTo(0, 0))
            .catch(err => logError(err))
    }, [projectFetch, projectName]);

    const myProject = currentProject && currentProject.projects ? currentProject.projects : null;
    const id = params && params.projectName ? params.projectName : "none";
    return(
      <div className='projectItemContent' id={id}>
        {renderIf(currentProject && currentProject.image,
        <div>
        <div className='content'>
          <div className='coverImageWrapper'>
            <div className='coverImage' style={{background: `url(${imgObj[currentProject.image]})`, transform: "translate3d(0px, 0px, 0px)"}}></div>
            <div className='scrollWrapper' onClick={executeScroll} >
              <div className='iconDiv'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="53px" height="20px" viewBox="0 0 53 20" enableBackground="new 0 0 53 20" xml="preserve"><g><polygon points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779"> </polygon></g></svg>
              </div>
            </div>
          </div>
          <div className='projectDescriptionWrapper' ref={myRef}> 
            <div className='container'>
              <div className='projectTitleWrapper'>
                <p>{currentProject.name}</p>
              </div>
              {renderIf(currentProject.url !== "projects-in-c",
                <div className='projectDescWrapper'>
                  <p className='fullDesc'> {currentProject.fullDesc} <span className={classToggler({ 'fw300': true, 'hidden': currentProject.url !== "tensorflow"})}><a className='site' href='https://arxiv.org/pdf/1712.04440.pdf' rel='noopener noreferrer' target='_blank'>Facebook's scholarly article</a> with the Mnist dataset.</span></p>
                  {renderIf(currentProject.fullDesc1,
                    <p> {currentProject.fullDesc1} </p>
                  )}
                  {renderIf(currentProject.fullDesc2,
                    <p> {currentProject.fullDesc2} </p>
                  )}
                  {renderIf(currentProject.keyTech,
                    <p className='keyTechP'><span className='keyTech'>Key Tech </span>{currentProject.keyTech} </p>
                  )}
                  <p>
                    <a className="github" href={currentProject.github} rel="noopener noreferrer" target="_blank">Github</a>
                    {renderIf(currentProject.site !== 'na', 
                      <a className="site" href={currentProject.site} rel="noopener noreferrer" target="_blank">Site</a>
                    )}
                  </p>
                </div>
              )}
              {myProject &&
                <div className='projectDescWrapper'>
                  {myProject.map((project, idx) => {
                    return <div className='projectItemWrapper' key={idx}>
                      <p className='name'>{project.projectName}</p>
                      <p className='desc'>{project.projectDesc}</p>
                      <p><a className="github" href={project.projectGithub} rel="noopener noreferrer" target="_blank">Github</a></p>
                    </div>
                  })}
                </div>
              }
            </div>
          </div>
        </div>
        <Footer2/>
        </div>
        )}
      </div>
    );
}

const mapStateToProps = state => ({ currentProject: state.currentProject });
const mapDispatchToProps = dispatch => ({ projectFetch: url => dispatch(projectFetchRequest(url)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItemContainer);