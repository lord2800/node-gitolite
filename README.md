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

OR
```
var gitolite = require('node-gitolite');
gitolite.clone('git@myserver:gitolite-admin.git', '/path/to/checkout/to').then(function (admin) {
	// manage users/groups/repos
});
```
