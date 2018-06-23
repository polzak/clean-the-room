# clean-the-room Function
## This function is submitted for [Zero-to-mastery Coding Challenge 6](https://github.com/zero-to-mastery/Coding_Challenge-6)

Given an array of numbers or strings that can be converted to numbers, the function returns cleaned version of it. The returned cleaned version includes a numbers' array where numbers are sorted and same numbers constitue their own array inside it, and a strings' array where strings are sorted in a number's way and same strings constitute their own array inside it.

### Example
#### given [3, 1, 4, 1, 2, 3]
output -> [ [ 1, 1 ], 2, [ 3, 3 ], 4 ]

#### given [3, 1, 4, 1, '5', 2, '3', 3, '5']
output ->
The numbers' result after cleaning: [ [ 1, 1 ], 2, [ 3, 3 ], 4 ]
The strings' result after cleaning: [ '3', [ '5', '5' ] ]

### Test
The index.js file includes a test function that generates and uses a random array. Whenever you run the index.js file, you get a different result from a different array given. You can set some constants to vary the numbers and range of the numbers.

* NUMBER_OF_ELEMENTS: set the number of elements in a given array
* RANGE_OF_NUMBERS: set the range of generated numbers
* RATIO_OF_NUMBERS: set the ratio of numbers to strings generated in the array. 
