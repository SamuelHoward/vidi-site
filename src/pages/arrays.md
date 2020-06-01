---
title: "Arrays"
type: "docs"
num: 4
---

Arrays in Vidi act like arrays in most other programming languages on the surface. Unlike some languages, Vidi arrays are not homogeneous. This means that their elements can have multiple types. 

### Initializing arrays

There are two main ways to initialize arrays in Vidi. The first method is the more intuitive method and is best used for arrays are meant to have specific values that do not necessarily have a pattern.

| Initialization | Description of A |
| ----------- | ----- |
| `A <- []` | Empty list |
| `A <- [1]` | Singleton list of `1` |
| `A <- [0, 1]` | List of `0`, `1` |
| `A <- [TRUE, "A", 3]` | List of `TRUE`, `"A"`, `3` |
| `A <- [[0, 1], [1, 0]]` | List of lists, `0`,`1` and `1`,`0`  |

The other method is used for initializing arrays that have a consistent pattern to them or are just a single element repeated.

| Initialization | Description of A |
| ----------- | ----- |
| `A <- [0] * 0` | Empty list |
| `A <- [1] * 1` | Singleton list of `1` |
| `A <- [1] * 3` | List of `1`, `1`, `1` |
| `A <- [0, 1] * 3` | List of `0`, `1`, `0`, `1`, `0`, `1` |
| `A <- [TRUE, "A", 3] * 2` | List of `TRUE`, `"A"`, `3`, `TRUE`, `"A"`, `3` |
| `A <- [[]] * 4` | List of four empty lists  |

### Operations on arrays

The following operations are used to work with arrays. It is important to note that Vidi arrays begin at index 0.

| Operation | Description |
| ----------- | ----- |
| `A[I]` | Access the element in Array A at index I |
| `A[I] = C` | Make the element in Array A at index I into C |
| `LENGTH A` | Find how many elements array A has |
| `LENGTH A` | Find how many elements array A has |
| `A + B` | Concatenate arrays A and B |
| `A == B` | Do arrays A and B have the same elements |
| `A != B` | Do arrays A and B not have the same elements |