

module.exports = function () {
  return function (request, response, next) {
    var data = '';

    response.setEncoding('utf8');

    response.addListener('data', function (chunk) {
      data += chunk;
    });

    response.addListener('end', function () {
      response.body = data;
      next();
    });
  };
};
