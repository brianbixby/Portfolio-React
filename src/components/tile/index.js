import React from 'react';
import { Link } from 'react-router-dom';

function Tile({project}) {
    const obj = {
      bb: require("./../assetts/bb2.webp"),
      c: require("./../assetts/c.webp"),
      chow: require("./../assetts/chow2.webp"),
      si: require("./../assetts/si.webp"),
      tf: require("./../assetts/tf.webp"),
      weather: require("./../assetts/weather.webp")
    };
    return(
      <Link to={`/project/${project.url}`}>
        <div className='tileWrapper'>
          <img src={obj[project.image]} alt="project screen shot" />
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

export default Tile;