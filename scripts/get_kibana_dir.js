const fs =  require('fs');
const yml = require('js-yaml');

const readYaml = (path) => yml.safeLoad(fs.readFileSync(path, 'utf8'));
const kibanaDir = readYaml('./config.dev.yml')['kibana.dir'];

module.exports = { kibanaDir };