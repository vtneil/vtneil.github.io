# Practice Problems for Week 3: Branching (Conditional Statements)

## Guide (Please read!!!)

There are 3 levels of difficulty of practice problems which will help
guide you on how you do the assignment.

1. Concept (★☆☆) will help you recheck yourself whether you understood the content.
2. Apply (★★☆) will step up some difficulty where you have to apply several concepts.
3. Technique (★★★) is more challenging.

The problems will state inputs and outputs of the program.
Inputs and outputs can be more than one, one each, see examples for more details.

## Problems

### (★☆☆) 1. Odd-Even

### (★☆☆) 2. BMI (revised)

Write a BMI calculator program which prompt
user to input their height and weight.

First, the program will ask the user **"Enter your height in meters: "**.

Second, the program will ask the user **"Enter your weight in kg: "**.

Then, the program will show **"Your BMI is: "** followed by BMI index.

The BMI of a person can be calculated using formula `weight / (height ** 2)`

Then, the program shall input whether the user is underweight, normal, overweight, or obese.

**Ranges of BMI values corresponding to result**
<table>
    <tr>
        <th>BMI Range</th>
        <th>Print these results</th>
    </tr>
    <tr>
        <td>< 18.5</td>
        <td>Underweight</td>
    </tr>
    <tr>
        <td>18.5 - 24.9</td>
        <td>Normal weight</td>
    </tr>
    <tr>
        <td>25.0 - 29.9</td>
        <td>Overweight</td>
    </tr>
    <tr>
        <td>>= 30</td>
        <td>Obese</td>
    </tr>
</table>

**Example of usages**

```python
# This function will print everything separated by comma ', '.
def print_all(*args):
    print(', '.join(args))
    
print_all('x', 'hello', 'sth')
# Output will be: x, hello, sth
```

**Input:**

1. Height in meters
2. Weight in kg

**Output:**

1. BMI Index
2. Result of BMI calculation

**Examples**

```python
Input:  -
-----
Output: -
```

[//]: # (todo)

### (★☆☆) 3. Grading

In most schools and institutions, grade is calculated by 
classifying ranges of score. Write a program that calculate 
the grade of the user based on their score out of 100.

### (★☆☆) 4. Divisible?

Write a program that check whether the number `a` is divisible by `b` by 
outputting a **Yes** or a **No**.

### (★★☆) 5. ATM Machine

Write a program that calculate types of banknote that will be output 
based on amount of money that user inputs.

This ATM has these banknote: *1000*, *500*, *100*, *50*, *1*
