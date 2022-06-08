import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import Footer2 from '../footer2';
import { projectFetchRequest } from '../../actions/project-actions.js';
import { logError, renderIf, classToggler } from './../../lib/util.js';

function ProjectItemContainer({ currentProject, projectFetch, params}) {
    // const myRef = React.createRef();
    const { projectName } = useParams();
    const [trans, setTrans] = useState(`translate3d(0px, 0px, 0px)`);
    useEffect(() => {
        projectFetch(projectName)
            .then(() => {
                // window.addEventListener('scroll', handleScroll);
                window.scrollTo(0, 0);
            })
            .catch(err => logError(err))
    }, [projectFetch, projectName]);

    // const executeScroll = () => myRef.current.scrollIntoView()

    let myProject = currentProject && currentProject.projects ? currentProject.projects : null;
    const obj = {
      bb: require("./../assetts/bb2.png"),
      c: require("./../assetts/c.png"),
      chow: require("./../assetts/chow2.png"),
      si: require("./../assetts/si.png"),
      tf: require("./../assetts/tf.png"),
      weather: require("./../assetts/weather.png")
    };
    let id = params && params.projectName ? params.projectName : "none";
    return(
      <div className='projectItemContent' id={id}>
        {renderIf(currentProject && currentProject.image,
        <div className='content'>
          <div className='coverImageWrapper'>
            <div className='coverImage' style={{background: `url(${obj[currentProject.image]})`, transform: trans}}></div>
            <div className='scrollWrapper' 
            // onClick={() => scrollToComponent(ProjectDescriptionWrapper, { offset: 0, align: 'top' })}
            >
              <div className='iconDiv'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="53px" height="20px" viewBox="0 0 53 20" enableBackground="new 0 0 53 20" xml="preserve"><g><polygon points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779"> </polygon></g></svg>
              </div>
            </div>
          </div>
          <div className='projectDescriptionWrapper' 
        //   ref={myRef}
          > 
          {/* ref={(section) => { ProjectDescriptionWrapper = section; }}> */}
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
        )}
        <Footer2/>
      </div>
    );
}

const mapStateToProps = state => ({ currentProject: state.currentProject });
const mapDispatchToProps = dispatch => ({ projectFetch: url => dispatch(projectFetchRequest(url)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItemContainer);