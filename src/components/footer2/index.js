import React from 'react';

class Footer2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='footerWrapper'>
        <div className='footerSpacer'></div>
        <div className='container'>
          <div className='footerTitleWrapper'>
            <p className='footer2Title'> Get in touch </p>
          </div>
          <div className='footerFormWrapper'>
            <a className="footer2Links" href="https://www.linkedin.com/in/brianbixby1/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            <a className="footer2Links" href="https://github.com/brianbixby" rel="noopener noreferrer" target="_blank">Github</a>
            <a className="footer2Links" href="mailto:brianbixby0@gmail.com">brianbixby0@gmail.com</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Footer2;