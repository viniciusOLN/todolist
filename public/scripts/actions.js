import Modal from '../scripts/modal.js'

const settingsModal = {
  "heigth":"500px",
  "width": "92%",
  "backgroundColor": "#fff",
  "fontFamily":"Arial",
  "fontColor":"#fff",
  "center": "true"
}

const btn_add = document.querySelectorAll('.btn')  
const modal = new Modal(settingsModal)

btn_add.forEach(item => stateModal(item))

function stateModal(item){
  item.addEventListener('click', () => {
    modal.createModal()
  })
}