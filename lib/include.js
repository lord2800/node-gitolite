function Include() {
	this.file = '';
	this.repos = [];
	this.includes = [];
	this.groups = [];
}

Include.prototype.toString = function () {
	var result = '';
	result += 'File: ' + this.file + '\n';

	result += 'Repos:\n'
	this.repos.forEach(function (repo) {
		result += '\t' + repo + '\n';
	});

	result += 'Groups:\n';
	this.groups.forEach(function (group) {
		result += '\t' + group + '\n';
	});

	result += 'Includes:\n';
	this.includes.forEach(function (include) {
		result += '\t' + include + '\n';
	});

	return result;
};

module.exports = Include;
