import { AppState } from "../AppState.js";


class MoneyService {
  addQuarter() {
    AppState.money += .25
    console.log('money has been added')
  }
}

export const moneyService = new MoneyService()