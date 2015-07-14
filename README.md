WAT
===

Very handy markdown (.md) to html slides converter
based on [https://github.com/gnab/remark](https://github.com/gnab/remark)
Works from command line, and also with unix pipeline.


HOW
===

Installation
------------
Install as command line tool:
`npm i -g md2slides`
One may run this command with `sudo`

Usage
-----
`md2slides file.md output.html`
Will read your `md` file and convert it to `html`
It also saves a `remark*.js` file in the same directory as `html`.

WHY
===
It makes very nice looking slides.
And makes them really quickly.

Example MD
==========

# Title

---

# Agenda

1. Introduction
2. Deep-dive
3. ...

---

# Introduction

---

# Test

```JavaScript
function add(a, b) {
	return a + b;
}
$watch(watchExpression, listener, [objectEquality]);
```

# test ruby

```ruby
puts "What's up?"
print "world"
```

# Development
run those commands to test:
Clone this repository with:

```bash
git clone git@github.com/syzer/md2slides
cd md2lides
npm i --dev
npm test
```

Documentation
=============
[remark](https://github.com/gnab/remark/wiki/Configuration#highlighting)

TODO
====
[X] ```javascript => ```js'
[ ] support for math equations
