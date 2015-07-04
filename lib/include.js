function Include() {
	this.file = '';
	this.repos = [];
	this.includes = [];
	this.groups = [];
}

Include.prototype.toString = function () {
	return 'include "' + this.file + '"';
};

module.exports = Include;
