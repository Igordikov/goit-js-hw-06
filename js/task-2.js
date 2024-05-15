class Storage {
constructor (items) {
    this.items = items
}
    getItems() {
        return this.items;
    }

    addItem(newItem) {
        return this.items.push(newItem);
    }

    removeItem(itemToRemove) {
    
        const findIndex = this.items.findIndex(item => item.name === itemToRemove);
        if (findIndex !== -1) {
          return this.items.splice(findIndex, 1);
 
}}}





const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
