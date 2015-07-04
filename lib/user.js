function User(name) {
	this.name = name;
}

User.prototype.toString = function () {
	return 'User: ' + this.name;
};

module.exports = User;
