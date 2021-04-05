import {Controller} from 'stimulus'

export default class extends Controller {
  static targets = ['toggleable']

  connect() {
  }

  toggle(event) {
    event.preventDefault()
    this.toggleableTarget.classList.toggle("show")
  }

}