class Storage {
    #items
constructor (items) {
    this.#items = items
}
    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        return this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        const findIndexToRemove = this.#items.indexOf(itemToRemove);
        if (findIndexToRemove !== -1) {
            const removedItem = this.#items.splice(findIndexToRemove, 1)[0];
            return removedItem;
        } 
    }}
        
       





const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
