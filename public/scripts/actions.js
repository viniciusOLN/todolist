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
    
    modal.addElement({fatherClass:'modal', className: 'title', elementName: 'h2', textOptional: 'Adicionar nova tarefa'})
    modal.addElement({fatherClass:'modal', className: 'ri-close-fill', elementName: 'i'})
    modal.addElement({fatherClass: 'modal', className: 'task-div', elementName: 'div'})
    modal.addElement({fatherClass: 'task-div', className: 'label', elementName: 'p', textOptional: 'Nova Tarefa'})
    modal.addElement({fatherClass: 'task-div', className: 'label', elementName: 'p', textOptional: 'Título da tarefa'})
    modal.addElement({fatherClass: 'task-div', className: 'input-task', elementName: 'input'})
    modal.addElement({fatherClass: 'task-div', className: 'label', elementName: 'p', textOptional: 'Descrição da Tarefa'})
    modal.addElement({fatherClass: 'task-div', className: 'input-task', elementName: 'input'})
    modal.addElement({fatherClass: 'task-div', className: 'label', elementName: 'p', textOptional: 'Responsável'})
    modal.addElement({fatherClass: 'task-div', className: 'input-task', elementName: 'input'})
    modal.addElement({fatherClass: 'task-div', className: 'label', elementName: 'p', textOptional: 'Descrição detalhada da tarefa'})
    modal.addElement({fatherClass: 'task-div', className: 'input-task', elementName: 'textarea', typeInput:'text'})
    modal.addElement({fatherClass: 'task-div', className: 'input-select', elementName: 'select', selectValues: {
      0: "Concluída",
      1:"Aberta",
      2:"Em andamento"
      }
    })

    modal.closeModal()
  })
}