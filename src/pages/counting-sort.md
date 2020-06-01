---
title: "Counting Sort"
type: "samples"
num: 2
---

Counting sort is a method of sorting numbers within a certain range. An auxillary array is used wherein the values at each index in the array correspond with the amount of times that index appears in the array being sorted. Below is a Vidi script that sorts a list of numbers using counting sort. These numbers have to be nonnegative integers and they are taken from the command line arguments to the program. The first argument has to be an integer that is the maximum possible value in the array, but the rest of the command line arguments are numbers to be sorted.

![Counting sort in Vidi](../images/vidi-samples-countingSort-0.PNG)

An example input to this program would be `5 3 2 0 1 1 1 4 5 4 5 3 3 3` and the output would be `0 1 1 1 2 3 3 3 3 4 4 5 5` . Note that the output has one less `5` than the input because the initial `5` in the input is not treated as a number to be sorted, but as the maximum possible value in the array.