import { AppState } from "../AppState.js"

export class SnacksController {
  constructor() {
    console.log('snacks controller loaded')
    this.drawSnacks()
  }

  drawSnacks() {
    console.log('drawing snacks')

    const snacks = AppState.snacks

    let SnackCardsContent = ''
    snacks.forEach(snack => SnackCardsContent += snack.cardTemplate)
    // console.log(SnackCardsContent)

    const snackListElem = document.getElementById('SnackCards')
    snackListElem.innerHTML = SnackCardsContent
  }

}
