var fs = require('fs');

var modules = module.exports = {},
    list, file, name, module;

list = fs.readdirSync(__dirname);

for (var i = 0, il = list.length; i < il; i++) {
  file = list[i];

  if (file === 'index.js' ||
      file === 'util.js') {
    return;
  }

  file = /^(.*)\..*$/.exec(file);

  if (file) {
    try {
      name   = file[1],
      module = require('./' + name);

      if (typeof module === 'function') {
        modules[name] = module;
      }
    } catch (error) {
      throw error;
    }
  }
}
