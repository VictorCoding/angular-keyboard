import { Component, HostListener } from '@angular/core'
import { css } from 'emotion'

const containerStyles = css`
  display: flex;
  flex-direction: column;
`
const keyboardContainerStyles = css`
  width: 90vw;
  min-width: 400px;

  button {
    width: 40px;
  }
`

@Component({
  selector: 'my-app',
  template: `
    <div [ngClass]="containerStyles">
      <div>
        <input>
        <input>
      </div>
      <div [ngClass]="keyboardContainerStyles">
        <button *ngFor="let char of characters"
                (click)="addCharacter(char)">
          {{char}}
        </button>
      </div>
    </div>
  `
})
export class AppComponent  {
  containerStyles = containerStyles
  keyboardContainerStyles = keyboardContainerStyles
  characters = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
  ]
  lastFocusedElement;
  @HostListener('focusout', ['$event'])
  onFocusOut(event) {
    if (event.target.tagName === 'INPUT') {
      this.lastFocusedElement = event.target
    }
    
  }

  addCharacter(char) {
    if (this.lastFocusedElement) {
      this.lastFocusedElement.value += char
    }
  }
}
