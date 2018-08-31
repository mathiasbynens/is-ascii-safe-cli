# is-ascii-safe-cli [![Build status](https://travis-ci.org/mathiasbynens/is-ascii-safe.svg?branch=master)](https://travis-ci.org/mathiasbynens/is-ascii-safe)

_is-ascii-safe-cli_ checks whether a given file (or list of files) is ASCII-safe, i.e. consisting of ASCII characters (U+0000 to U+007F) only. It returns a non-zero exit status if any of the files contains a non-ASCII character.

## Installation

To use _is-ascii-safe-cli_, install it globally via [npm](https://www.npmjs.com/):

```bash
npm install --global is-ascii-safe-cli
```

## Usage

```sh
is-ascii-safe foo.mjs
is-ascii-safe foo.txt bar.json baz.mjs
is-ascii-safe src/*.mjs
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |
