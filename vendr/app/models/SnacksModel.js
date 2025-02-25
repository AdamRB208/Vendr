

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
          <img src="${this.imgUrl}
            alt="image of vending machine items">
          <span>${this.name}</span>
          <div>${this.price.toFixed(2)}</div>
        </div>`
  }
}

