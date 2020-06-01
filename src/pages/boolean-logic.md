---
title: "Boolean Logic"
type: "docs"
num: 2
---

Boolean logic in Vidi acts just as it does in most programming languages. It is important to note that in Vidi, only the literal booleans `TRUE` and `FALSE` (as well as expressions that evaluate to these values) can be used by boolean operators. In some languages, values such as 0 have significance to boolean operators. This is not the case in Vidi.

### Primary operators

| Operator | Description |   A   |  B  | Output |
| :------: | ----------- | ----- | --- | ------ |
| `A && B` | A and B | FALSE | FALSE | FALSE |
| | | FALSE | TRUE | FALSE |
| | | TRUE | FALSE | FALSE |
| | | TRUE | TRUE | TRUE |
| `A || B` | A or B | FALSE | FALSE | FALSE |
| | | FALSE | TRUE | TRUE |
| | | TRUE | FALSE | TRUE |
| | | TRUE | TRUE | TRUE |
| `! A` | Not A | FALSE | | TRUE |
| | | TRUE | | FALSE |
| `A == B` | Is A equal to B? | FALSE | FALSE | TRUE |
| | | FALSE | TRUE | FALSE |
| | | TRUE | FALSE | FALSE |
| | | TRUE | TRUE | TRUE |
| `A != B` | Is A not equal to B? | FALSE | FALSE | FALSE |
| | | FALSE | TRUE | TRUE |
| | | TRUE | FALSE | TRUE |
| | | TRUE | TRUE | FALSE |

### Other useful operators

| Operator | Description |   A   | Output |
| :------: | ----------- | ----- | ------ |
| `BOOL? A` | Is A a boolean? | Boolean | TRUE |
| | | Other | FALSE |
| `STRING A` | Turn A into a String | TRUE | "true" |
| | | FALSE | "false" |