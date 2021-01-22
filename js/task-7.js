/*Задача. Лавка зелий «У старой жабы»
Задание
К нам обратилась владелица лавки зелий «У старой жабы» 
и заказала программу для ведения инвентаря - добавления, 
удаления, поиска и обновления зелий.*/

const atTheOldToad = {
    potions: [
      { name: 'Зелье скорости', price: 460 },
      { name: 'Дыхание дракона', price: 780 },
      { name: 'Каменная кожа', price: 520 },
    ],
   
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
        return this.potions.push(potionName);
    },
    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            if (this.potions[i].name === potionName) {
                console.log('Yes! :', this.potions[i]);
                this.potions.splice(i, 1)
            }

        }
  
  },
  updatePotionName (oldName, newName) {
for (let i=0; i < this.potions.length; i+=1) {
if (this.potions[i].name === oldName) {
this.potions[i].name = newName;
return this.potions;
}
}

}
}
  console.log(atTheOldToad.getPotions());
  console.log(atTheOldToad.removePotion('Дыхание дракона'));
  console.log(atTheOldToad.getPotions());