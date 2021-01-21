/** Подсчёт свойств
Напиши функцию countProps(object), которая считает 
и возвращает количество собственных свойств объекта 
в параметре object. 
*/
//  function countProps(object) {
//     let propCount = 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     return propCount;
//   }
//   console.log(countProps({ name: 'Mango', age: 2 }));
//
// ИЛИ:
// 
// function countProps(object) {
//     let propCount = 0;
//   const props = Object.keys(object);
//   for (const i of props) {
//     propCount +=1;
//   }
//   return propCount;
//   }
//   console.log(countProps({ name: 'Mango', age: 2 }));


/* Скомбинировав результат Object.keys() и цикл for...of 
можно удобно перебрать собственные свойства объекта, 
не прибегая к использованию архаического цикла for...in 
с проверками принадлежности свойств. 
*/
// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
// values.push(apartment[key])
// }
// console.log(values);


/* Расходы на зарплату
Напиши функцию  которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. 
Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
*/
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//   const values = Object.values(salaries)
//   for (const s of values) {
//   totalSalary += s};
//     return totalSalary;
// }
//    console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); 

// Массив объектов
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      rating: 8.38,
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      rating: 8.51,
    },
    {
      title: 'Сон смешного человека',
      author: 'Федор Достоевский',
      rating: 7.75,
    },
  ];
  for (const book of books) {
    // Объект книги
    console.log(book);
    // Название
    console.log(book.title);
    // Автор
    console.log(book.author);
    // Рейтинг
    console.log(book.rating);
  }
// Задание
// Перебери массив объектов colors используя цикл for...of. 
// Добавь в массив hexColors значения свойств hex, 
// а в массив rgbColors значения свойств rgb из всех объектов массива colors.
// 
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }
//   console.log(hexColors);


// Поиск объекта по значению свойства
// Напиши функцию, которая принимает название продукта. 
// Функция ищет объект продукта с таким именем и возвращает его цену. 
// Если продукт с таким названием не найден, функция должна возвращать null.
// 
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
//   function getProductPrice(productName) {
//   for (const product of products) {
//       if (productName === product.name) {
//           return product.price;
//       }
//   }
// return null;
//   }
//   console.log(getProductPrice('Дроид'));

// Задача. Коллекция значений свойства
// Напиши функцию, которая принимает один параметр имя свойства. 
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве. 
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     const props = [];
//     for (const product of products) {
//         const keys = Object.keys(product)
//         if (keys.includes(propName)) {
//         props.push(product[propName]);}
//     }
//     return props;
//   }
//   console.log(getAllPropValues('category'));