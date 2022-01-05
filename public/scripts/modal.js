class Modal{

    static addClass(){
        var link = document.createElement("link")
        link.href = "/public/css/modal.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        link.media = "screen,print"
    
        document.getElementsByTagName("head")[0].appendChild(link)
    }

    constructor(modalSetings){
        this.heigth = modalSetings.heigth
        this.width = modalSetings.width
        this.backgroundColor = modalSetings.backgroundColor        
        this.addClass = Modal.addClass()       
    }

    createModal(){
        const divBack = document.createElement('div')
        const newNodeBack = document.body.appendChild(divBack)
        newNodeBack.setAttribute('class', 'background')

        const div = document.createElement('div')
        const newNode = document.body.appendChild(div)
        newNode.setAttribute('class', 'modal')        

        newNode.style.backgroundColor = this.backgroundColor
        newNode.style.height = this.heigth
        newNode.style.width = this.width
    
        newNodeBack.appendChild(newNode)

        document.body.style.overflowY = 'hidden'
    }

    closeModal(){
        const close = document.querySelector('.ri-close-fill')          
        close.addEventListener('click', () => {           
          this.removeModal()           
        })  
    }

    removeModal(){
        const modal = document.querySelector('.modal')
        const background = document.querySelector('.background')
        modal.parentNode.removeChild(modal)            
        background.parentNode.removeChild(background) 

        document.body.style.overflowY = 'scroll'
    }

    addElement(fatherClass, className, elementName, textOptional){
        const father = document.querySelector(`.${fatherClass}`)
        const newElement = document.createElement(`${elementName}`)
        const newElementNode = document.body.appendChild(newElement)
        newElement.setAttribute('class', `${className}`)           

        father.appendChild(newElementNode)
        
        if(!(textOptional == undefined)){
            newElement.innerText = textOptional
        }   
    }
}

export default Modal