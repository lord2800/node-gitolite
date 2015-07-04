function Repo() {
	this.name = '';
	this.options = [];
	this.rules = [];
}

Repo.prototype.toString = function () {
	var result = '';
	result += 'Repo: ' + this.name + '\n';

	result += 'Options:\n';
	this.options.forEach(function (option) {
		result += '\t' + option + '\n';
	});

	result += 'Rules:\n';
	this.rules.forEach(function (rule) {
		result += '\t' + rule + '\n';
	});

	return result;
};

module.exports = Repo;
