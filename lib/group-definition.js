function GroupDefinition(name, members) {
	this.name = name;
	this.members = members;
}

GroupDefinition.prototype.toString = function () {
	var result = '';
	result += 'Group Definition: ' + this.name;
	this.members.forEach(function (member) {
		result += '\t' + member + '\n';
	});
	return result;
};

module.exports = GroupDefinition;
