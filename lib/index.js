var Conf = require('./conf-file');

module.exports = {
	load: function loadRepo(dir) {
		return Conf.parse(dir);
	}
};
