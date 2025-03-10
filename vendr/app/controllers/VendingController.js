import { AppState } from "../AppState.js"
import { moneyService } from "../services/MoneyService.js"

export class VendingController {
  constructor() {
    console.log('vending controller loaded')
    AppState.on('miney', this.drawMoney)
  }

  addQuarter() {
    moneyService.addQuarter()
  }

  drawMoney() {
    const moneyAsCurrency = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(AppState.money)
    // setText('total-money', moneyAsCurrency)
  }
}
