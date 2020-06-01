---
title: "Basic Components"
type: "docs"
num: 0
---

Vidi programs are made up of expressions, statements, whitespace, and comments. Expressions and statements make up most of Vidi code, but whitespace is necessary in some circumstances. Comments are used to describe code and will never affect how a program runs, unless code is commented out.

### Expressions

Expressions in Vidi are code segments that evaluate to a value but do not change any existing values in the program or cause any side effects. Values from expression evaluations are used in statements to potentially change values and cause side effects. A Vidi program is a series of statements, so Vidi program containing an isolated expression will not run. The simplest way to experiment with expressions is by using the Print statement, which is called using `PRINT` followed by an expression.

Most Vidi expressions evaluate to a numeric or boolean value. The table below shows examples of the different expressions in Vidi and what they evaluate to.

| Expression | Evaluation |
| ---------- | ---------- |
| `123` | Integer with value 123 |
| `-123` | Integer with value -123 |
| `987.654` | Float with value 987.654 |
| `-987.654` | Float with value -987.654 |
| `"Hello World"` | String with value "Hello World" |
| `TRUE` | Boolean with value True |
| `FALSE` | Boolean with value False |
| `[1, 2, 3]` | Array of integer values; 1, 2, 3 |
| `A[0]` | Access the first value of an array with id A |
| `2 + 3` | Integer with value 5 |
| `4 - 5` | Integer with value -1 |
| `TRUE && FALSE` | Boolean with value False |
| `TRUE || FALSE` | Boolean with value True |

This is not an exhaustive list of expressions. Take a look at the samples and rest of the documentation for more examples of expressions.

### Statements

Statements are segments of Vidi code that change existing values or result in side effects (such as printing). Statements typically involve expressions and sometimes even other statements. Below is a table with example Vidi statements along with their corresponding effect.

| Statement              | Effect |
| ---------------------- | ------ |
| `A <- 1` | Variable A is created and initialized with value 1 |
| `A = 0` | Variable A now has value 0. A must be declared first |
| `A = FALSE` | Variable A now has value False. A must be declared first, but does not need to be declared as a boolean |
| `A = [0, 1]` | Variable A now has the value of an Array with integer values 0, 1 |
| `A[0] = 2` | Variable A (from previous statement) now has the value of an Array with integer values 2, 1|
| `PRINT "Hi!"` | Prints "Hi!" to the command line |
| `F(X) <- RETURN X ->` | F is now a function that takes an argument and simply returns it |
| `Call F(1)` | Run the function F given argument 1 and ignore the returned value |

This is not an exhaustive list of statements. Take a look at the samples and rest of the documentation for more examples of statements.

### Notes about Whitespace

In most cases, whitespace in Vidi only serves to make the code more readable. However whitespace is important when using IDs with names that are close to keywords, such as `WHILE`, and when working with negative numbers.