function GroupDefinition(name, members) {
	this.name = name;
	this.members = members;
}

GroupDefinition.prototype.toString = function () {
	return '@' + this.name + ' = ' + this.members.join(' ');
};

module.exports = GroupDefinition;
