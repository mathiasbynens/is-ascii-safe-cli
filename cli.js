#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const isAsciiSafe = require('is-ascii-safe');
const pkg = require('./package.json');

const reNonAscii = /[^\0-\x7F]/g;

let isFailure = false;
const files = process.argv.slice(2).map((file) => path.resolve(file));

if (files.length === 0) {
	console.log(`
		is-ascii-safe v${ pkg.version } - https://github.com/mathiasbynens/is-ascii-safe-cli

		Usage:

			is-ascii-safe foo.mjs
			is-ascii-safe foo.txt bar.json baz.mjs
			is-ascii-safe src/*.mjs
	`.trim().replace(/\t{2}/g, ''));
	process.exit(0);
}

for (const file of files) {
	const contents = fs.readFileSync(file).toString('utf-8');
	if (!isAsciiSafe(contents)) {
		isFailure = true;
		console.error(`${ file } is not ASCII-safe!`);
		let match;
		while (match = reNonAscii.exec(contents)) {
			const symbol = match[0];
			const position = match.index;
			console.log(`- Found non-ASCII symbol ${ symbol } at position ${ position }`);
		}
	}
}

if (isFailure) {
	process.exit(1);
} else {
	console.log(`${ files.length } file(s) are ASCII-safe.`);
}
