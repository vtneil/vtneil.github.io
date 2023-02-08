# Practice Problems for Week 2-3: Strings and Lists

## Guide (Please read!!!)

There are 3 levels of difficulty of practice problems which will help 
guide you on how you do the assignment.

1. Concept (★☆☆) will help you recheck yourself whether you understood the content.
2. Apply (★★☆) will step up some difficulty where you have to apply several concepts.
3. Technique (★★★) is more challenging.

The problems will state inputs and outputs of the program.
Inputs and outputs can be more than one, one each, see examples for more details.

## Problems

### (★☆☆) 1. String Reverse

Write a program that print the reversed version of the string.

**Input:**

1. a string from user

**Output:**

1. a reversed string

**Examples**

```python
Input:  hello world!
-----
Output: !dlrow olleh'
```

### (★☆☆) 2. String Conversion

Write a program that does the following:

**Input:**

1. a string `s` from user
2. an integer `a` from user


**Output:**

1. the length (how many characters) of the string `s`
2. first `a` characters of `s`
3. last `a` characters of `s`

**Examples**

```python
Input:  phoomkung
        3
-----
Output: 9
        pho
        ung
```

### (★☆☆) 3. Find substring

A substring is a string contained within a string. An empty string is a substring 
of every string. Write the program that does the following:

**Input:**

1. a string `s` from user
2. a string `t`, which will be the substring, from user

**Output:**

1. the index of first occurrences of substring `t` in string `s`. If `s` does not contain `t`, 
the program must not raise an exception (no error when not found).

**Examples**

```python
Input:  This is so exiting!
        is
-----
Output: 2

Because 'This is so exiting!'
           ~~
```

### (★☆☆) 4. Find substring (from the right)

From 3. and some useful string methods from searching Google, Write the program that does the following:

**Input:**

1. a string `s` from user
2. a string `t`, which will be the substring, from user

**Output:**

1. the index of last occurrences of substring `t` in string `s`. If `s` does not contain `t`, 
the program must not raise an exception (no error when not found).

**Examples**

```python
Input:  This is so exiting!
        is
-----
Output: 5

Because 'This is so exiting!'
              ~~
```

### (★☆☆) 5. Sort the list (1)

Write a program that sort the list `e` in **ascending** order. 
You will have to do only some parts of the program.
Copy the template code below and read I/O instructions.

**Template (copy and fill code)**
```python
# These are inputs
e = [int(input()) for i in range(int(input()))]

# Write your code here to sort the list
# and print the sorted list.
# There are many ways to do this.
```

**Input:**

1. a number `n` which determines how many elements are there in the list
2. Next `n` lines: an integer which will be in the list

**Output:**

1. A sorted list

**Examples**

```python
Input:  4
        7
        6
        9
        2
-----
Output: [2, 6, 7, 9]
```

### (★☆☆) 6. Sort the list (2)

Write a program that sort the list `e` in **descending** order. 
You will have to do only some parts of the program.
Copy the template code below and read I/O instructions.

**Do not use [::-1]**

**Template (copy and fill code)**
```python
# These are inputs
e = [int(input()) for i in range(int(input()))]

# Write your code here to sort the list
# and print the sorted list.
# There are many ways to do this.
```

**Input:**

1. an integer `n` which determines how many elements are there in the list
2. Next `n` lines: an integer which will be in the list

**Output:**

1. A sorted list

**Examples**

```python
Input:  4
        7
        6
        9
        2
-----
Output: [9, 7, 6, 2]
```

### (★☆☆) 7. Pop it off!

Write a program that remove en element of the list at index `i`.

**Template (copy and fill code)**
```python
# These are inputs
e = [4, 9, 7, 4, 4, 4, 6, 2]

# Write your code here
```

**Input:**

1. an integer `i`

**Output:**

1. A list `e` with element at index `i` removed.
2. element that has been removed

**Examples**

```python
Input:  3
-----
Output: [4, 9, 7, 4, 4, 6, 2]
        4
        
Because 4 is at index 3 in the original list.
```

### (★☆☆) 8. Split it...

Write a program that split an input `s` into a list. The string is split by space.

**Input:**

1. a string `s`

**Output:**

1. A list from `s`

**Examples**

```python
Input:  hello test test 1 2 3
-----
Output: ['hello', 'test', 'test', '1', '2', '3']
```

### (★★☆) 9. and join it!

Write a program that split an input `s` into a list. The string is split by space.
Then, join them by space but in reversed order.

**Remarks** Reversed order means reversed order of words, not every character.

**Input:**

1. a string `s`

**Output:**

1. a reversed order of `s`

**Examples**

```python
Input:  hello test test 1 2 3
-----
Output: 3 2 1 test test hello
```

### (★★☆) 10. Sort the tuples

Write a program that sort the list of *k*-tuples.

**Template (copy and fill code)**
```python
# These are inputs
n = int(input())
e = [tuple([int(x) for x in input().split()]) for i in range(n)]

# Your code begin here
x = e
# Use x as output list
# Your code end here

for elem in x:
    print(*elem, sep=' ')
```

**Input:**

1. an integer `n` which determines how many tuples are there in the list

**Output:**

1. A sorted (*descending order*) list of tuples `x`

**Examples**

```python
Input:  4 5 6
        7 8 9
        1 2 2
        
# e becomes [(4, 5, 6), (7, 8, 9), (1, 2, 2)]

-----
Output: 7 8 9
        4 5 6
        1 2 2
```
