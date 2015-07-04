function Repo() {
	this.members = [];
	this.options = [];
	this.rules = [];
}

Repo.prototype.toString = function () {
	var result = 'repo ' + this.members.join(' ') + '\n';
	result += this.options.map(function (opt) { return '\t' + opt; }).join('\n');
	if(this.options.length > 0) {
		result += '\n';
	}
	result += this.rules.map(function (rule) { return '\t' + rule; }).join('\n');
	if(this.rules.length > 0) {
		result += '\n';
	}

	return result;
};

module.exports = Repo;
