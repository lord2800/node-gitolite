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

# NOTABLE LIMITATIONS
* Doesn't handle include cycles. Too lazy to make it work as I don't use it. PRs welcome!
* Doesn't handle glob files currently. Planning on implementing this, but PRs still welcome.