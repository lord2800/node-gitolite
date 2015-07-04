var Conf = require('./conf-file');

module.exports = {
	load: function loadRepo(dir) {
		return Conf.parse(dir);
	},
	save: function saveRepo(dir, root) {
		return Conf.save(dir, root);
	}
};
