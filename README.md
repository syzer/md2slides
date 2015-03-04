WAT
===

Jet another .md to .html slides converter
based on [https://github.com/gnab/remark](https://github.com/gnab/remark)


HOW
===

installation
------------
`npm i -g md2slides`

Usage
-----
`md2slides test/fixture.md > test.html`
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


Documentation
=============
[remark](https://github.com/gnab/remark/wiki/Configuration#highlighting)

TODO
====
[ ] ```javascript => ```js'
