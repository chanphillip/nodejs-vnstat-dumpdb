var exec = require ('child_process') .exec;

var bin = process.env.NODE_APP_BIN || 'vnstat';

exec (bin + ' --version', function (err, res) {
  if (err) {
    throw err;
  }

});
