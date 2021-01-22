/* Массив объектов */
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       rating: 8.38,
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       rating: 8.51,
//     },
//     {
//       title: 'Сон смешного человека',
//       author: 'Федор Достоевский',
//       rating: 7.75,
//     },
//   ];
//   for (const book of books) {
//     // Объект книги
//     console.log(book);
//     // Название
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }
  
// /* Деструктуризация объектов в циклах*/
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       rating: 8.38,
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       rating: 8.51,
//     },
//   ];
  
//   for (const book of books) {
//     const { title, author, rating } = book;

//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }
//   /*Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.*/
//   for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }
// /* Глубокая деструктуризация */
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// /* Задание */
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
//   const hexColors = [];
//   const rgbColors = [];
//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
//   console.log(hexColors);
//   console.log(rgbColors);

// /* Задание 
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент 
// */
// const bookShelf = {
//     books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//     updateBook(oldName, newName) {
//       const indexOfbookToRemove = this.books.indexOf(oldName);
//       this.books.splice(indexOfbookToRemove,1,newName);
//     },
//   };
//   console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));


// const bookShelf = {
//     books: ['Последнее королевство'],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     },
//   };
  
//   console.log(bookShelf.getBooks()); // []
//   bookShelf.addBook('Мгла');
//   bookShelf.addBook('Страж снов');
// //   console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
//   bookShelf.removeBook('Мгла');
// //   console.log(bookShelf.getBooks());



/*Задача. Лавка зелий «У старой жабы»
Задание
К нам обратилась владелица лавки зелий «У старой жабы» 
и заказала программу для ведения инвентаря - добавления, 
удаления, поиска и обновления зелий.*/


// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     removePotion(potionName) {
//       for (const potion of this.potions) {
//       if (potion === potionName) {
//         const potionIndex = this.potions.indexOf(potionName);
//         return this.potions.splice(potionIndex,1)
//       }
//       }
//     },
//   };
//   console.log(atTheOldToad.removePotion('Зелье скорости'));


  