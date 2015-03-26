WAT
===

Jet another .md to .html slides converter
based on [https://github.com/gnab/remark](https://github.com/gnab/remark)


HOW
===

Installation
------------
Clone this repository with:
`git clone git@github.com/syzer/md2slides && cd $_`

Install as command line:
`npm i -g md2slides`
One may run this command with sudo

Usage
-----
`md2slides file.md output.html`
will read your md file and convert it to html


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
`npm i --dev`
`npm test`

Documentation
=============
[remark](https://github.com/gnab/remark/wiki/Configuration#highlighting)

TODO
====
[X] ```javascript => ```js'
[ ] support for math equations
