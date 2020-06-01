---
title: "Command Line Arguments"
type: "docs"
num: 6
---

Any command line arguments can be accessed within a Vidi program using an already defined array `ARGV`. The elements of this array are the command line arguments as strings. `ARGV[0]` will always be the name of the current Vidi program, so the other command line arguments begin at `ARGV[1]`. Since the elements of this array are all strings, the casting operators will be very useful when using command line arguments.