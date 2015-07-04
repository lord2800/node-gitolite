var Repo = require('./repo'),
	User = require('./user'),
	Group = require('./group'),
	Include = require('./include'),
	Option = require('./option'),
	GroupDefinition = require('./group-definition');

var path = require('path'),
	Promise = require('bluebird'),
	fs = Promise.promisifyAll(require('fs')),
	glob = require('glob')
;

function empty(v) { return !!v; }

function parseRepos(line) {
	// everything after it is either a repo group (begins with @) or a single repo name (everything else)
	return line.split(' ').filter(empty).map(function (symbol) {
		var repo = new Repo();
		repo.name = symbol;
	});
}

function parseInclude(line) {
	var include = new Include();
	// everything after it is a quoted glob match relative to conf/
	include.file = line;
	return include;
}

function parseGroupDefinition(line) {
	// group definitions may include other groups (@-prefixed) or users
	var groupName = line.substr(1);
	var groupMembers = line.substr(line.indexOf('=')+1).trim().split(' ');
	return new GroupDefinition(groupName, groupMembers);
}

function parseOption(line) {
	// line is an option object
	// options are key-value pairs
	var kv = line.split('=');
	var option = new Option(kv[0].trim(), kv[1].trim());
	return option;
}

function parseRule(line) {
	var rule = new Rule();
	// rules have 3 parts:
	var kv = line.split('=');
	var temp = kv[0].split(' ');
	// 1. permission
		// R, RW, RW+, -, M?, C?, D?
	var permission = temp[0];
	rule.permission = permission;

	// 2. refex
		// regex that matches a ref
	var refex = temp[1];
	rule.refex = refex;

	// 3. user/group list
	kv[1].split(' ').forEach(function (symbol) {
		symbol = symbol.trim();

		if(symbol === '') {
			return;
		}

		if(symbol[0] === '@') {
			rule.users.push(new Group(symbol.substr(1)));
		} else {
			rule.users.push(new User(symbol));
		}
	});
}

function decode(buffer, result) {
	buffer.split(require('os').EOL).forEach(function (line) {
		// filter comments from the line
		// trim both sides
		line = line.split('#')[0].trim();

		// if line begins with repo
		if(line.indexOf('repo') === 0) {
			// line begins a repo object
			result.repos.push(parseRepos(line.substr('repo'.length).trim()));
		}

		// if line begins with include
		if(line.indexOf('include') === 0) {
			// line is an include object
			result.includes.push(parseInclude(line.substr('include'.length).trim()));
		}

		// else if line begins with a @
		if(line.indexOf('@') === 0 && line.indexOf('=') !== -1) {
			// line is a group definition
			result.groups.push(parseGroupDefinition(line));
		}

		// if currently in a repo object
		if(result.repos.length > 0) {
			var currentRepo = result.repos[result.repos.length - 1];
			// if line begins with option
			if(line.indexOf('option') === 0) {
				currentRepo.options.push(parseOption(line.substr('option'.length).trim()));
			// else line is a rule
			} else {
				currentRepo.rules.push(parseRule(line));
			}
		}
		// we didn't match any sort of line?
	});
}

function encode(object) {

}

function parseFile(file, container) {
	return fs.readFileAsync(file).then(function (data) {
		return decode(data, container);
	}).then(function () {
		var promises = [];
		container.includes.forEach(function (include) {
			promises.push(parseFile(include.file, include));
		});
		return Promise.all(promises).then(function () { return container; });
	});
}

module.exports = {
	parse: function (dir) {
		var result = new Include();
		return parseFile(path.join(dir, 'gitolite.conf'), result);
	}
};
