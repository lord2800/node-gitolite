var Conf = require('./conf-file');

module.exports = {
	load: function loadRepo(dir) {
		return Conf.parse(dir);
	},
	save: function saveRepo(dir, root) {
		return Conf.save(dir, root);
	},

	Repo: require('./repo'),
	User: require('./user'),
	Group: require('./group'),
	Include: require('./include'),
	Option: require('./option'),
	Rule: require('./rule'),
	GroupDefinition: require('./group-definition')
};
