import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number }

  initialize() {
    this.showCurrentSlide()
  }

  next() {
    if(this.indexValue == 3)
      this.indexValue = 1
    else
      this.indexValue++
  }

  previous() {
    if(this.indexValue == 0)
      this.indexValue = 3
    else
      this.indexValue--
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}
