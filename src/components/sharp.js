const sharp = require('sharp');
const fs = require('fs');
const directory = `${__dirname}/assetts`;

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(464, 364) // width, height
    .toFile(`${directory}/${file}-small.webp`);
  });