

export class Snack {
  constructor(foodItems) {
    this.name = foodItems.name
    this.price = foodItems.price
    this.imgUrl = foodItems.imgUrl

  }


  get cardTemplate() {
    return `
    <div class="col 4">
          <div></div>
          <img class="itemimg" src="${this.imgUrl}
            alt="image of vending machine items">
          <span>${this.name}</span>
          <div><button class="mt-2 mb-3 p-1"onclick="app.SnacksController.addQuarter()">$${this.price.toFixed(2)}</button></div>
        </div>`
  }
}

// update add quarter for onclick in snacks controller 
