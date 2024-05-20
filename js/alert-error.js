import { inputHeight, inputWeight } from "./script.js"

export const alertError = {
  element: document.querySelector('.alert-error'),
  open() {
    alertError.element.classList.add('open')
    inputHeight.value = ''
    inputWeight.value = ''
  },
  close() {
    alertError.element.classList.remove('open')
  }
}