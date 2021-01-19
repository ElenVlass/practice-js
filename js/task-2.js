'use strict'
//1.5
const enterCountry = prompt('Enter your country');
let country
let price = 0;

if (enterCountry === null) {
    alert('В вашей стране доставка не доступна');
} else {
country = enterCountry.toLowerCase();
switch (country) {
    case 'китай':
        price = 100;
        break;
    
    case 'чили':
        price = 250;
        break;
    
    case 'австралия':
        price = 170;
        break;
    
    case 'индия':
        price = 80;
        break;
    
    case 'ямайка':
        price = 120;
        break;
}
const report = `Доставка в ${country} будет стоить ${price} кредитов`;
console.log(report);
};

//1.6
// let input;
// let total = 0;

// while (input !== null) {
//     input = prompt('Enter a number');
//     console.log(typeof input);
//     total += input;
// } ;
// alert(`Общая сумма чисел равна ${total}`)