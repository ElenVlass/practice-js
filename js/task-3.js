
//2.1
// const logItems = function(array) {
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(`${i+1} - ${array[i]}`);
//     }
// }
// const brandsArray = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const numbersArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// logItems(brandsArray);
// logItems(numbersArray);

//2.2

// let totalPrice = 0;
// const calculateEngravingPrice = function (message, pricePerWord) {
//     let quantityWords = 0;
//     message = message.split(' ');
//     for ( let i = 0; i < message.length; i += 1) {
//         quantityWords += 1;
//         totalPrice = quantityWords * pricePerWord;
//     }
//     return totalPrice;
// }
// console.log(calculateEngravingPrice('Proin sociis mus', 20));

//2.3
const findLongestWord = function (string) {
    string = string.split(' ');
    let longestWord = string[0];
    for (let i = 0; i < string.length; i += i) {
        if (string[i].length > longestWord.length) {
           longestWord = string[i]
       }
    }
    return longestWord;
}


console.log(findLongestWord('May the force be with you'));


//2.4
// const formatString = function (string) {
//     let stringArray = string.split('');
//     let symbolQuantity = 0;
//     for (let i = 1; i <= stringArray.length; i +=1) {
//         symbolQuantity = i;
//     } if (symbolQuantity <= 40) {
//         return string;
//     } else {
//         stringArray.length = 40;
//         string = stringArray.join('');
//         string += '...';
//     }
// return string;
// }
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

