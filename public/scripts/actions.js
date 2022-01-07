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
    modal.addElement('modal', 'task-div', 'div')
    modal.addElement('task-div', 'label', 'p', 'Nova Tarefa')
    modal.addElement('task-div', 'label', 'p', 'Título da tarefa')
    modal.addElement('task-div', 'input-task', 'input', 'text')
    modal.addElement('task-div', 'label', 'p', 'Descrição da Tarefa')
    modal.addElement('task-div', 'input-task', 'input', 'text')
    modal.addElement('task-div', 'label', 'p', 'Responsável')
    modal.addElement('task-div', 'input-task', 'input', 'text')
    modal.addElement('task-div', 'label', 'p', 'Responsável')
    modal.addElement('task-div', 'input-task', 'textarea', 'text')

    modal.closeModal()
  })
}