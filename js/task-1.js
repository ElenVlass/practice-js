'use strict'
// 1.1
// let name = 'Генератор защитного поля';
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// //1.2
// let total = 100;
// let ordered = 50;
// let message = total > ordered ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно твоаров!"
// console.log(message);

// //1.3
// let password = prompt('Enter password');
// let notification 
// const ADMIN_PASSWORD = 'hi'

// if (password === null) {
//     notification = 'Отменено пользователем!';
// } else if (password === ADMIN_PASSWORD) {
//     notification = 'Добро пожаловать!';
// } else {
//     notification = 'Доступ запрещен, неверный пароль!';
// }

// alert(notification);

//1.4
let credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt('How many droids do you want to by?');
let totalPrice = 0;
let report

if (quantity === null) {
    report = 'Отменено пользователем!';
} else {
    totalPrice = quantity * pricePerDroid;
    report = totalPrice > credits ? 'Недостаточно средств на счету!' : 
        `Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
}
console.log(report);







