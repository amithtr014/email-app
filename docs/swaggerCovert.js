const YAML = require('yamljs');
const ymlfile = YAML.load('./docs/doc_api.yaml');
module.exports = ymlfile;
