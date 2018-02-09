'use strict';

const fs = require('fs');
const ejs = require('ejs');

const data = fs.readFileSync('./char-map.json').toString();
const tpl = fs.readFileSync('./test/examples/all.ejs');
const template = ejs.compile(tpl.toString());

fs.writeFileSync('./test/examples/all.html',
	template({all: JSON.parse(data)}), 'utf8');
