'use strict';

const test = require('tape');
const fold = require('./../../');
const data = require('./../../char-map.json');

test('should be an object', assert => {
	assert.equal(typeof fold, 'function');
	assert.end();
});

test('should fold characters properly', assert => {
	data.forEach(row => {
		assert.equal(
			fold(row.character),
			row.folded,
			`should fold ${row.character} to ${row.folded}`);
	});
	assert.end();
});

test('should handle empty strings gracefully', assert => {
	assert.equal(fold(), '', `should fold a null value to an empty string`);
	assert.end();
});

window.close();
