import { Controller } from 'stimulus'

export default class extends Controller {
  connect () {
    this._updateColour()
  }

  setToWhite(){
    this.data.set('colour', 'white')
    this._updateColour()
  }
  
  _updateColour(){
    this.element.style = `background: ${this.data.get('colour')};`
  }
};
