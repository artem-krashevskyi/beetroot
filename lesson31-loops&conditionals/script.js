/* Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) 
або пенсіонером (60 ...), передбач можливість введення невірних даних. */
const userAge = +prompt("How old are you? (enter a number)");
let returnMessage;

switch (true) {
    case userAge >= 0 && userAge <= 11:
        returnMessage = "You are a child";
        break;

    case userAge >= 12 && userAge <= 17:
        returnMessage = "You are a teenager";
        break;

    case userAge >= 18 && userAge <= 59:
        returnMessage = "You are an adult";
        break;

    case userAge >= 60 && userAge <= 140:
        returnMessage = "You are a senior";
        break;

    default:
        returnMessage = "Invalid input!";
}

console.log({returnMessage});


/* Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
який розташований на цій клавіші (1 !, 2 @, 3 # і т. д). */
const userNumber = +prompt("Enter a number from 0 to 9:");
let returnSymbol;

switch (userNumber) {
    case 0:
        returnSymbol = ")";
        break;

    case 1:
        returnSymbol = "!";
        break;

    case 2:
        returnSymbol = "@";
        break;

    case 3:
        returnSymbol = "#";
        break;

    case 4:
        returnSymbol = "$";
        break;

    case 5:
        returnSymbol = "%";
        break;

    case 6:
        returnSymbol = "^";
        break;

    case 7:
        returnSymbol = "&";
        break;

    case 8:
        returnSymbol = "*";
        break;

    case 9:
        returnSymbol = "(";
        break;

    default:
        returnSymbol = "Invalid input!";
}

console.log({returnSymbol});


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const minNumber = +prompt("Enter the lower limit of the range:");
const maxNumber = +prompt("Enter the higher limit of the range:");

if (!isNaN(minNumber) && !isNaN(maxNumber) && minNumber < maxNumber) {
    let sum = 0;

    for (let i = minNumber; i <= maxNumber; i++) {
        sum += i;        
    }

    console.log({sum});
} else {
    console.log("Invalid input!");
}


/* Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%. */
const orderPrice = +prompt("How much does your order cost?");

if (orderPrice > 0) {
    let discount = 0;

    switch (true) {
        case orderPrice > 500:
            discount = 0.07;
            break;
            
        case orderPrice > 300:
            discount = 0.05;
            break;

        case orderPrice > 200:
            discount = 0.03;
            break;
    }

    const totalPrice = (orderPrice * (1 - discount)).toFixed(2);
    console.log(`With your discount, your order will cost ${totalPrice}.`);
} else {
    console.log("Invalid input!");
}


/* Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. */
const myArray = [2, -2, 7, 8, 0, -31, 22, 95, 0, 19];
let positiveNumbers = 0;
let negativeNumbers = 0;
let nullNumbers = 0;
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 0; i < myArray.length; i++) {
    if (!isNaN(myArray[i])) {
        if (myArray[i] > 0) {
            positiveNumbers++;
        } else if (myArray[i] < 0) {
            negativeNumbers++;
        } else {
            nullNumbers++;
        }

        if (myArray[i] % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
    }
}

console.log(`Positive numbers - ${positiveNumbers}, negative numbers - ${negativeNumbers}, 
nulls - ${nullNumbers}, even numbers - ${evenNumbers}, odd numbers - ${oddNumbers}.`);


/* Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » 
і так до тих пір, поки користувач натискає OK. */
let dayOfWeek = 1;
let dayName;

while (true) {
    switch (dayOfWeek % 7) {
        case 1:
            dayName = 'Monday';
            break;

        case 2:
            dayName = 'Tuesday';
            break;

        case 3:
            dayName = 'Wednesday';
            break;

        case 4:
            dayName = 'Thursday';
            break;

        case 5:
            dayName = 'Friday';
            break;

        case 6:
            dayName = 'Saturday';
            break;

        case 0:
            dayName = 'Sunday';
            break;
    }

    const switchToNextDay = confirm(`${dayName}. Do you want to see the next day?`);
    if (!switchToNextDay) break;
    dayOfWeek++;
}


// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


/* Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
Враховуй можливість переходу на наступний місяць, рік, а також високосний рік. */
let day = Math.floor(+prompt('Enter a day (number):'));
let month = Math.floor(+prompt('Enter a month (number):'));
let year = Math.floor(+prompt('Enter a year (number):'));

if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && !isNaN(year)) {
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    let daysInMonth;

    switch (month) {
        case 2:
            daysInMonth = isLeapYear ? 29 : 28;
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            daysInMonth = 30;
            break;

        default:
            daysInMonth = 31;
    }

    if (day <= daysInMonth) {
        if (day === daysInMonth) {
            day = 1;

            if (month === 12) {
                month = 1;
                year++;
            } else {
                month++;
            }
        } else {
            day++;
        }

        console.log(`${day}.${month}.${year}`);
    } else {
        console.log("Invalid input!");
    }
} else {
    console.log("Invalid input!");
}