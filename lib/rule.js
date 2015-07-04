function Rule() {
	this.permission = '';
	this.refex = '';
	this.users = [];
}

Rule.prototype.toString = function () {
	return this.permission + ' ' + this.refex + ' = ' + this.users.join(' ');
};

module.exports = Rule;
