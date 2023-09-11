const fs = require('fs');

function createFileIfNotExist(path) {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }
}

module.exports = {
  createFileIfNotExist
}