node-gitolite
=============
A gitolite manager module for node.js

Example usage:

```
var gitolite = require('node-gitolite');
gitolite.load('/path/to/gitolite-admin').then(function (admin) {
	// manage users/groups/repos
});
```
