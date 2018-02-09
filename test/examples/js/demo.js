'use strict';

var fold = require('./../../../');

var example = document.getElementById('example');
var output = document.getElementById('output');

var strings = Array.prototype.slice.call(document.querySelectorAll('[data-fold]'));

strings.forEach(el => {
	var output = document.getElementById(el.getAttribute('data-fold'));
	output.textContent = fold(el.textContent);
});

example.addEventListener('input', e => {
	output.value = fold(e.srcElement.value);
});

example.addEventListener('focus', e => {
	output.classList.add('focused');
});

example.addEventListener('blur', e => {
	output.classList.remove('focused');
});

