import React from 'react';
import { Link } from 'react-router-dom';

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }

  render() {
    const { project } = this.props;
    const obj = {
      bb: require("./../assetts/bb2.png"),
      c: require("./../assetts/c.png"),
      chow: require("./../assetts/chow2.png"),
      si: require("./../assetts/si.png"),
      tf: require("./../assetts/tf.png"),
      weather: require("./../assetts/weather.png")
    };
    return(
      <Link to={`/project/${project.url}`}>
        <div className='tileWrapper'>
          <img src={obj[project.image]} />
          <div className='tileInner'>
            <div className='text'>
              <p className='projectName'>{project.name} </p>
              <p className='projectDesc'>{project.shortDesc} </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Tile;