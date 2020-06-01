---
title: "Arithmetic"
type: "docs"
num: 1
---

Arithmetic in Vidi can be done with both integers and floats, usually using the same operators. When given a combination of integers and floats, most Vidi operators will treat integer input as floats and out accordingly.  

Variables with integer or float values can be used in any expression or statement that accepts numeric values. It is encouraged to seperate arithmetic computations using variables, as Vidi arithmetic evaluation may not evaluate exactly as expected. In particular, subtractions and divisions are evaluated right to left.

### Primary operators

| Operator | Description | Input | Output |
| :------: | ----------- | ----- | ------ |
| `A + B` | Sum of A and B | Integers | Integer |
| | | Floats | Float |
| | | Integer and Float | Float |
| `A - B` | Subtraction of B from A | Integers | Integer |
| | | Floats | Float |
| | | Integer and Float | Float |
| `A * B` | Product of A and B | Integers | Integer |
| | | Floats | Float |
| | | Integer and Float | Float |
| `A / B` | A divided by B | Integers | Integer |
| | | Floats | Float |
| | | Integer and Float | Float |
| `A % B` | A modulo B | Integers | Integer |
| | | Floats | Error |
| | | Integer and Float | Error |

### Relational operators

| Operator | Description | Input | Output |
| :------: | ----------- | ----- | ------ |
| `A < B` | Is A less than B? | Integers | Boolean |
| | | Floats | Boolean |
| | | Integer and Float | Error |
| `A > B` | Is A greater than B? | Integers | Boolean |
| | | Floats | Boolean |
| | | Integer and Float | Error |
| `A <= B` | Is A less than or equal to B? | Integers | Boolean |
| | | Floats | Boolean |
| | | Integer and Float | Error |
| `A >= B` | Is A greater than or equal to B? | Integers | Boolean |
| | | Floats | Boolean |
| | | Integer and Float | Error |
| `A == B` | Is A structurally equal to B? | Integers | Boolean |
| | | Floats | Boolean |
| | | Integer and Float | Error |
| | | Booleans | Boolean |
| | | Arrays | Boolean |
| `A != B` | Is A structurally unequal to B? | Integers | Boolean |
| | | Floats | Boolean |
| | | Integer and Float | Error |
| | | Booleans | Boolean |
| | | Arrays | Boolean |

### Predicates and Casting

| Operator | Description | Input | Output |
| :------: | ----------- | ----- | ------ |
| `INT? A` | Is A an integer? | Integer | TRUE |
| | | Other | FALSE |
| `FLOAT? A` | Is A a float? | Float | TRUE |
| | | Other | FALSE |
| `INT A` | Turn A into an integer | Integer | Integer |
| | | Float | Integer |
| | | String | Integer |
| | | Other | Error |
| `FLOAT A` | Turn A into a float | Integer | Float |
| | | Float | Float |
| | | String | Float |
| | | Other | Error |