import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["input", "output"]
  show(){
    console.log("Called", this.inputTarget.value)
    this.outputTarget.textContent = this.inputTarget.value
    console.log("Called", this.outputTarget.value)
  }
}
