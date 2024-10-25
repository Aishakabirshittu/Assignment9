/*Question 1:
1.Create two boolean variables, isPublicHoliday and isWeekDay, and assign them appropriate values.
2.Combine them using && (and) and || (or) operators to check if the weekday is a public holiday.
3.Print the result.*/
//SOLUTION:
let isPublicHoliday = false;
let isWeekDay= true;
let today = isPublicHoliday && isWeekDay;
 console.log(`Answer 1: today is either a weekday or publicholiday: ${today}`);

let istoday = isPublicHoliday || isWeekDay;
console.log(`Answer 1: today is either a weekday or publicholiday: ${istoday}`);

/*Question 2:
1.Write a function called add_three_num that takes three numbers as arguments.
2.The function should return the addition of the three numbers.
3.Call the function with three numbers and print the returned value.*/
//SOLUTION:
function add_three_num(num1, num2, num3){
    return num1+ num2+ num3;
}
console.log(`Answer 2: ${add_three_num(1,2,3)}`);

/*Question 3:
1.Create a variable called nick_name and assign it your nick name.
2.Create a variable called count and assign it any number of your choice.
3.Print both variables using console.log().*/
//SOLUTION:
let nick_name = "Aiesharh";
let count = 100;
console.log(`Answer 3: ${nick_name}, ${count}`);

/*Question 4:
1. Create a variable with your best meal as a string.
2.use string concatenation or template literals to combine it with your name (e.g., "John loves ${best_meal}").
3.Print the final message.*/
//SOLUTION:
const bestMeal = 'Pounded yam';
const my_name = 'Aisha'
console.log(`Answer 4: ${my_name}` + " loves "+ `${bestMeal}`);

/*Question 5:
1.Using the question where you declared and called the add_three_num function:
1.Write a multi-line comment at the top of your script describing what your code does.
2.Add single-line comments inside your code explaining each step.*/
//SOLUTION:
let _comment = "single and multi-line comment";
/*This is a function that adds three paramaters*/
function add_three_num(num1, num2, num3){
    //adding (num1+num2+num3)
    return num1 + num2 + num3;
}
console.log(`Answer 5: ${add_three_num(1,2,3)}, ${_comment}`);

/*Question 6:
1.Create a variable without assigning any value (leave it undefined).
2.Print the variable to see the output.
3.Now, assign null to the same variable and print it again.*/
//SOLUTION:
let n;
console.log(`Answer6: ${n}`);
n = null;
console.log(`Answer6: ${n}`);

/*Question 7:
1.Create a variable with today_day and assign it a value (e.g., 23).
2.Use a comparison operator to check if the today_day is greater than 30.
3.Store the result of the comparison in a variable and print it.*/
//SOLUTION:
let today_day = 25;
today_day = today_day > 30;
console.log(`Answer 7: Today is greater than the 30th: ${today_day}`);

/*Question 8:
1.Declare a function named greet that takes a person's name and time of day as an argument.
2.Inside the function, print a message like: "Good [day], [name]".
3.Call the function and pass any name and time of day to it.*/
//SOLUTION:
function greet(name, dayTime){
    console.log(`Answer 8: Good ${dayTime} ${name}`);

}
greet("Abubakar", "night");

/*Question 9:
1.Create two variables, x and y, and assign them any number of your choice.
2.Perform addition, subtraction, multiplication, division and modulo operation on these variables.
3.Print the results of each of the operations.*/
//SOLUTION:
let x = 1000;
let y = 100;

let add = x + y;
let sub = x - y;
let mul = x * y;
let div = x / y;
let rmn = x % y;
console.log(`Answer 9: ${add}, ${sub}, ${mul}, ${div}, ${rmn}`);


/*Question 10:
1. Create a variable count and assign it an initial value of 0.
2.Add 10 to the count variable.
3.Multiply 20 by the count variable.
4.Print the final value of count.*/
//SOLUTION:
let mount = 0;
mount += 10;
mount *= 20;
console.log(`Answer 10: ${mount}`);