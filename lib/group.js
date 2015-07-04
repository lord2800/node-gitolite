function Group(name) {
	this.name = name;
}

Group.prototype.toString = function () {
	return 'Group: ' + this.name;
};

module.exports = Group;
