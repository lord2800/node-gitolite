function Group(name) {
	this.name = name;
}

Group.prototype.toString = function () {
	return '@' + this.name;
};

module.exports = Group;
