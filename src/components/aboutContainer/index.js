import React from 'react';
import Footer from '../footer';

class AboutContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div className='pageContent'>
        <div className='aboutHeader'>
          <div className='container'>
            <p> Hello, I’m a Front End Developer in Seattle, WA. Over the last year I've had the pleasure of honing my skillset through an immersive software engineering program at 42 Silicon Valley, previously I crafted digital experiences at John L. Scott. </p>
          </div>
        </div>
        <div className='spacer'></div>
        <div className='aboutMeWrapper'>
          <div className='container'>
            <div className='projectTitleWrapper'>
              <p>About Me</p>
            </div>
            <div className='projectDescWrapper'>
              <p>Over the last year and a half I’ve been fortunate to go back to school, but before that I was making a career out of the things I love doing. I’ve designed and created over 100 websites for real estate teams, corporate offices and a biotech consulting firm. I’ve had the pleasure of collaborating with some of the best people I've met in my life along the way. </p>
              <p>I love the process of working through new challenges, towards higher goals, and working as part of a team. I believe that anything can be accomplished with a great attitude and strong work ethic.</p>
              <p>I’m always keen to collaborate, so if you have an interesting project or idea - please don’t hesitate to get in touch.</p>
            </div>
          </div>
        </div>
        <div className='spacer'></div>
        <div className='experienceWrapper'>
          <div className='container'>
            <div className='projectTitleWrapper'>
              <p>Recent Experience</p>
            </div>
            <div className='projectDescWrapper'>
              <p className='experienceSectionHeader'>42 Silicon Valley </p>
              <p>Software development with a focus on C and Linux, averaged 50+ hrs a week.</p>
              <p>Member of the 42 Robotics Lab, engineered a smart incubator for Stanford Researchers and completed course work in Tensorflow.</p>
              <p className='experienceSectionHeader'>Code Fellows </p>
              <p>Full-Stack JavaScript development with 1,000+ hrs in class and creating deliverables. </p>
              <p> Highly focused in implementation of the MERN stack. </p>
              <p> Agile work environments and Git work flows utilized in assignments and one-week project sprints.</p>
              <p className='experienceSectionHeader'>John L. Scott </p>
              <p> Redesigned and developed over 110 custom websites for brokers, teams and offices with a focus on responsive design, cross-browser compatibility and usability across all ages and demographics.</p>
              <p>Completed extensive QA testing, responsibilities included: systematic test case creation, execution and analysis along with utilizing JIRA for bug reporting and feature write ups.</p>
              <p>Provided emergency tech support and troubleshooting assistance to brokers via phone and in person.</p>
              <p><a className="github" href="https://resume.creddle.io/resume/5n9dp9okfvo" rel="noopener noreferrer" target="_blank">Resume</a></p>
            </div>
          </div>
        </div>
        <div className='spacer'></div>
        <Footer />
      </div>
    );
  }
}

export default AboutContainer;