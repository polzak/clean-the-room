# Clean-the-room Function
## This function is submitted for [Zero-to-mastery Coding Challenge 6](https://github.com/zero-to-mastery/Coding_Challenge-6)

Given an array of numbers or strings that can be converted to numbers, the function returns cleaned version of it. The returned cleaned version includes a numbers' array where numbers are sorted and same numbers constitue their own array inside it, and a strings' array where strings are sorted in a number's way and same strings constitute their own array inside it.

### Example
#### given [3, 1, 4, 1, 2, 3]
output -> [ [ 1, 1 ], 2, [ 3, 3 ], 4 ]

#### given [3, 1, 4, 1, '5', 2, '3', 3, '5']
output ->
The numbers' result after cleaning: [ [ 1, 1 ], 2, [ 3, 3 ], 4 ]
The strings' result after cleaning: [ '3', [ '5', '5' ] ]
