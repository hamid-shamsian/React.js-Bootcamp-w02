// >>>>>>>>>>>>>>>>> Q1
// It alerts null.

//>>>>>>>>>>>>>>>>> Q2
// const number = parseFloat(prompt("enter a number"));
// if (isNaN(number)) {
//    alert("you didnt enter a valid number!");
// } else {
//    if (number > 0) alert("the given number is positive");
//    else if (number < 0) alert("the given number is negative");
//    else alert("the given number is 0.");
// }

//>>>>>>>>>>>>>>>>> Q3
// It alerts 2.

//>>>>>>>>>>>>>>>>> Q4
// const userAge = parseFloat(prompt("enter your age!"));
// if (isNaN(userAge) || userAge < 0) {
//    alert("you didnt enter a valid age!");
// } else {
//    if (userAge <= 10) alert("koodak!");  // the userAge is already larger than 0 because we checked it in the if conditions. so no need to check it here again.
//    else if (userAge <= 18) alert("nojavan!");  // the same as upper line: useAge is obviously larger than 10 so only check if it is less than 18.
//    else if (userAge <= 30) alert("javan!");   // the same as above...
//    else alert("bozorgsal!");
// }

//>>>>>>>>>>>>>>>>> Q5
/*

4 < 5 => true
"apple" > "pineapple" => false
"12" < "2" => true
undefined == null => true
undefined === null => false
error
error

*/

//>>>>>>>>>>>>>>>>> Q6
// function summation(num1 = 10, num2 = 20) {
//    const sum = num1 + num2;
//    return alert(isNaN(sum) ? "you entered at least one invalid number!" : sum);
// }

//>>>>>>>>>>>>>>>>> Q7
// function legalAge(age) {
//    return age > 18;
// }

//>>>>>>>>>>>>>>>>> Q8
// function getLargerNumber(num1, num2, num3) {
//    if (typeof num1 + typeof num2 + typeof num3 != "numbernumbernumber" || isNaN(num1 + num2 + num3)) return console.error("at least one invalid number!");
//    let temp = +num1 > +num2 ? +num1 : +num2;
//    return temp > +num3 ? temp : +num3;
// }
// console.log(getLargerNumber(299, 78, "32"));

//>>>>>>>>>>>>>>>>> Q9
// const calculator = function (num1 = 1, num2 = 1, operator = "+") {
//    if (typeof num1 + typeof num2 != "numbernumber" || isNaN(num1 + num2)) return console.error("at least one invalid number!");
//    switch (operator) {
//       case "+":
//          return num1 + num2;
//       case "-":
//          return num1 - num2;
//       case "*":
//          return num1 * num2;
//       case "/":
//          return num1 / num2;
//       default:
//          return console.error("invalid operator");
//    }
// };
// console.log(calculator("3", 5, "/"));
