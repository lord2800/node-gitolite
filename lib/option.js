function Option(key, value) {
	this.key = key;
	this.value = value;
}


Option.prototype.toString = function () {
	return 'Option: ' + this.key + '=' + this.value;
};

module.exports = Option;
