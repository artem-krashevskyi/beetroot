// Напиши всі можливі варіанти створення функцій.
// Function declaration, function expression, arrow function


// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArgs () {
    return arguments.length;
}

console.log('Number of args', countArgs(1, -2, 33, 'something', [], {}));


/* Напиши функцію, яка приймає 2 числа і повертає:
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні. */
const compareNumbers = function (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return undefined;
    }

    if (num1 == num2) {
        return 0;
    }

    return num1 < num2 ? -1 : 1;
}

console.log('Compare numbers', compareNumbers(12, 22));


// Напиши функцію, яка обчислює факторіал переданого їй числа.
const factorial = (number) => {
    if (isNaN(number) || number < 0 || number % 1 !== 0) {
        return undefined;
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log('Factorial', factorial(10));


/* Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
Наприклад: цифри 1, 4, 9 перетворяться в число 149. */
const createNumber = (n1, n2, n3) => {
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) ||
    n1 < 1 || n1 > 9 || n1 % 1 !== 0 ||
    n2 < 0 || n2 > 9 || n2 % 1 !== 0 ||
    n3 < 0 || n3 > 9 || n3 % 1 !== 0) {
        return undefined;
    }

    return n1 * 100 + n2 * 10 + n3;
}

console.log('Create a number', createNumber(1, 3, 5));


/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */
function findSquareArea (length, width) {
    if (isNaN(length) || isNaN(width) && width !== undefined) {
        return undefined;
    }

    return length * (width || length);
}

console.log('Find square area', findSquareArea(20, 30));


// Function closure
const returnAge = function (currentYear) {
    return function (yearOfBirth) {
        if (!currentYear || !yearOfBirth) {
            return "You didn't enter the year!";
        }

        if (isNaN(currentYear) || isNaN(yearOfBirth)) {
            return "Invalid input!";
        }

        const age = Math.floor(currentYear - yearOfBirth);

        if (age < 0 || age > 150) {
            return "Irrelevant numbers!";
        }

        return `Your age is ${age}`;
    }
}

console.log('Return age', returnAge(2020)(1992));