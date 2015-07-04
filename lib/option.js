function Option(key, value) {
	this.key = key;
	this.value = value;
}


Option.prototype.toString = function () {
	return 'option ' + this.key + ' = ' + this.value;
};

module.exports = Option;
