import Modal from '../scripts/modal.js'

const settingsModal = {
  "heigth":"500px",
  "width": "92%",
  "backgroundColor": "#fff",  
}

const btn_add = document.querySelectorAll('.btn')  
const modal = new Modal(settingsModal)

btn_add.forEach(item => stateModal(item))

function stateModal(item){
  item.addEventListener('click', () => {
    modal.createModal()
    modal.addElement('modal', 'title', 'h2', 'Adicionar nova tarefa')
    modal.addElement('modal', 'ri-close-fill', 'i')
    modal.closeModal()
  })
}