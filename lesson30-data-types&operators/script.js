// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const sum1 = Math.round((0.1 + 0.2) * 10) / 10;
console.log(sum1);

/* Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), 
добийся математично правильної відповіді. */
const str = "1";
const num = 2;
const sum2 = +str + num;
console.log(sum2);

/* Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів 
розміром в 820 Мб поміщається на флешку. */
const flashMemory = prompt("Який обсяг флешки в Гб?");
const fileSize = 820;
const filesNumber = Math.floor(1024 * flashMemory / fileSize);
alert(`На флешку поміщається ${filesNumber} файлів розміром 820 Мб.`);

/* Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить 
скільки шоколадок може купити користувач і скільки здачі у нього залишиться. */
const totalMoney = prompt("Скільки грошей у гаманці?");
const chocolatePrice = prompt("Скільки коштує шоколадка?");
const chocolateNumber = Math.floor(totalMoney / chocolatePrice);
const change = Math.floor((totalMoney - chocolateNumber * chocolatePrice) *100) / 100;
alert(`Ви можете купити ${chocolateNumber} шоколадок, у Вас залишиться ${change} грн.`);

/* Запитай у користувача тризначне число і виведи його задом наперед. 
Для вирішення завдання тобі знадобиться оператор % (залишок від ділення). */
let initialNumber = prompt("Введіть тризначне число:");
const thirdDigit = initialNumber % 10;
initialNumber = (initialNumber - thirdDigit) / 10;
const secondDigit = initialNumber % 10;
initialNumber = (initialNumber - secondDigit) / 10;
const reverseNumber = thirdDigit * 100 + secondDigit * 10 + initialNumber;
alert(`Число задом наперед - ${reverseNumber}.`)

/* Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
Вивести суму нарахованих відсотків. */
const depositSum = prompt("Скільки грошей Ви хочете покласти на депозит?");
const depositDuration = 2;
const depositRate = 5;
const percentSum = Math.floor(depositSum * depositRate / 100 * depositDuration / 12 * 100) / 100;
alert(`Сума нарахованих відсотків - ${percentSum}.`);