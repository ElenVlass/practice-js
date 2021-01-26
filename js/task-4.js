// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// const getFriendsOnline = function (allFriends) {
//     const friendsOnline = [];
//     for (const friend of allFriends) {
//         // const isOnline = allFriends.online ? `Друг ${friend.name} в сети` : `Друг ${friend.name} не в сети`;
//         if (friend.online)
//         {friendsOnline.push(friend.name);};
//     }
//     return friendsOnline;
// }
// console.log(getFriendsOnline(friends));


//2.5 - checkForSpam

// const checkForSpam = function (message) {
//     let isInclude;
//     message = message.toLowerCase();
//     const checkMessage = message.split(' ');
    
//     isInclude = checkMessage.includes('spam') || checkMessage.includes('sale');
  
//     return isInclude;
// }
   
// console.log(checkForSpam('JavaScript weekly newsletter'));
 
//2.6
// let input;
// const numbers = [];
// let total = 0;
// while (input !== null) {
//     input = prompt('Enter');
//     if (input !== null) { 
//        let number = Number(input);
//        if (Number.isNaN(number)) {
//            console.log('Було введено не число, попробуйте ще раз');
//     } else {
//   numbers.push(number);  }}}
// for (const number of numbers) {
//     total += number;
// }
// console.log(total);
