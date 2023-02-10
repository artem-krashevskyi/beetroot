/* Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом: */

const shoppingList = [
    {
        name: 'bread',
        quantity: 3,
        isBought: true,
        price: 10,
        sum: 30
    },

    {
        name: 'cheese',
        quantity: 1,
        isBought: false,
        price: 60,
        sum: 60
    },

    {
        name: 'tomato',
        quantity: 5,
        isBought: true,
        price: 15,
        sum: 75
    },

    {
        name: 'potato',
        quantity: 10,
        isBought: false,
        price: 5,
        sum: 50
    },

    {
        name: 'egg',
        quantity: 12,
        isBought: true,
        price: 3,
        sum: 36
    }
]


/* Виводити весь список на екран таким чином, щоб спочатку йшли продукти, 
що ще не придбані, а потім - ті, що вже придбали. */
function sortProductsByBought (array) {
    const isRelevantArray = Array.isArray(array) && array.every(product => product.hasOwnProperty('isBought'));
    if (isRelevantArray) {
        array.sort((a, b) => a.isBought - b.isBought);
        console.log(array);
    } else {
        console.log('Irrelevant array!');
    }
}

sortProductsByBought(shoppingList);


// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function buyProduct (array, name) {
    const isRelevantArray = Array.isArray(array) && array.every(product => product.hasOwnProperty('isBought')) &&
        array.every(product => product.hasOwnProperty('name'));
    if (isRelevantArray) {
        name = name.toLowerCase();
        const productIndex = array.findIndex(product => product.name === name);
        if (productIndex !== -1) {
            array[productIndex].isBought = true;
        } else {
            console.log('No such a product in the list!');
        }
    } else {
        console.log('Irrelevant array!');
    }    
}

buyProduct(shoppingList, 'cheese');
console.log(shoppingList);


/* Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
в якому продукт, що ми шукаємо, буде відсутнім) */
function deleteProduct (array, name) {
    const isRelevantArray = Array.isArray(array) && array.every(product => product.hasOwnProperty('name'));
    if (isRelevantArray) {
        name = name.toLowerCase();
        const productIndex = array.findIndex(product => product.name === name);
        if (productIndex !== -1) {
            const updatedArray = [...array.slice(0, productIndex), ...array.slice(productIndex + 1, array.length)];
            console.log(updatedArray);
        } else {
            console.log('No such a product in the list!');
        }
    } else {
        console.log('Irrelevant array!');
    }    
}

deleteProduct(shoppingList, "tomato");
console.log(shoppingList);


/* Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, 
наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24. */
function addProduct (array, newProduct) {
    const isRelevantArray = Array.isArray(array) && array.every(product => product.hasOwnProperty('name')) &&
        array.every(product => product.hasOwnProperty('quantity')) && array.every(product => product.hasOwnProperty('price')) &&
        array.every(product => product.hasOwnProperty('sum'));
    const isRelevantProduct = newProduct.hasOwnProperty('name') && newProduct.hasOwnProperty('quantity');

    if (isRelevantArray && isRelevantProduct) {
        newProduct.name = newProduct.name.toLowerCase();
        const productIndex = array.findIndex(product => product.name === newProduct.name);

        if (productIndex !== -1) {
            array[productIndex].quantity += newProduct.quantity;
            array[productIndex].sum =  array[productIndex].price * array[productIndex].quantity;
        } else {
            array.push(newProduct);
        }
    } else {
        console.log('Invalid input!');
    }
    
}

addProduct(shoppingList, {
        name: 'cucumber',
        quantity: 3,
        isBought: true,
        price: 10,
        sum: 30
    }
);
console.log(shoppingList);


// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
function getTotalPrice (array) {
    const isRelevantArray = Array.isArray(array) && array.every(product => product.hasOwnProperty('quantity')) && 
        array.every(product => product.hasOwnProperty('price'));
    if (isRelevantArray) {
        const totalPrice = array.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
        console.log(totalPrice);
    } else {
        console.log('Irrelevant array!');
    }
}

getTotalPrice(shoppingList);


// Підрахунок суми всіх (не) придбаних продуктів.
function getTotalPriceOfBought (array, bought = true) {
    const isRelevantArray = Array.isArray(array) && array.every(product => product.hasOwnProperty('isBought')) &&
        array.every(product => product.hasOwnProperty('quantity')) && array.every(product => product.hasOwnProperty('price'));
    if (isRelevantArray) {
        const totalPrice = array.reduce((accumulator, product) => {
            if (product.isBought === bought) {
                accumulator += product.price * product.quantity;
            }
            return accumulator;
        }, 0);
        console.log(totalPrice);
    } else {
        console.log('Irrelevant array!');
    }    
}

getTotalPriceOfBought(shoppingList, false);


/* Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
в залежності від параметра функції, який вона приймає) */
function sortProductsBySum (array, order = 'asc') {
    const isRelevantArray = Array.isArray(array) && array.every(product => product.hasOwnProperty('sum'));
    if (isRelevantArray) {
        switch (order) {
            case 'asc':
                array.sort((a, b) => a.sum - b.sum);
                console.log(array);
                break;
            case 'desc':
                array.sort((a, b) => b.sum - a.sum);
                console.log(array);
                break;
            default:
                console.log('Invalid input!');
        }
    } else {
        console.log('Irrelevant array!');
    }
}

sortProductsBySum(shoppingList, 'desc');