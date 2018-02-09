'use strict';

var accentMap = require('./accent-map.json');

module.exports = input => {
	if (!input) {
		return '';
	}

	var str = '';
	var i = null;

	for (i = 0; i < input.length; i++) {
		str += accentMap[input.charAt(i)] || input.charAt(i).toLowerCase();
	}

	return str;
};
