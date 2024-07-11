import { inputHeight, inputWeight } from "./script.js"

export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open: function() {
    Modal.wrapper.classList.add('open')
  },
  close: function() {
    Modal.wrapper.classList.remove('open')
  }
}

function handleClose() {
  Modal.close()

  inputHeight.value = null
  inputWeight.value = null
}

function handleKeyDown(event) {
  if(event.key === 'Escape' && Modal.wrapper.classList.contains('open')) {
    Modal.close()

    inputHeight.value = null
    inputWeight.value = null
  }
}

Modal.buttonClose.onclick = handleClose
window.addEventListener('keydown', handleKeyDown)