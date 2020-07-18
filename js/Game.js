class Game{
  constructor(){
  }
  update(itemName){
    database.ref('item').update({
      item: itemName
    });
  }
}