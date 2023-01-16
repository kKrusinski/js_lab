let noteInput
let errorInfo
let addBtn
let ulList
let newNote


let popup
let popupInfo
let noteToEdit
let popupInput
let popupAddBtn
let popupClosebtn



const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    noteInput = document.querySelector('.note-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.notelist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupClosebtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewNote)
    ulList.addEventListener('click', checkClick)
    popupClosebtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeNoteText)
    


}

const addNewNote = () => {
    if (noteInput.value !== '') {
        newNote = document.createElement('li');
        newNote.textContent = noteInput.value
        createToolsArea()
        ulList.append(newNote)
       
       
       
       
        noteInput.value = ''
        errorInfo.textContent =''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newNote.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn,editBtn,deleteBtn)
}

const checkClick = e => {
   if(e.target.matches('.complete')){
  e.target.closest('li').classList.toggle('completed')
  e.target.classList.toggle('completed')
   }else if(e.target.matches('.edit')) {
    editNote(e)
   }else if (e.target.matches('.delete')){
    deleteNote(e)
   }
   }

const editNote = e => {
   noteToEdit = e.target.closest('li')

   popupInput.value = noteToEdit.firstChild.textContent

   console.log(noteToEdit.firstChild);
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}


const changeNoteText = () => {
    if(popupInput.value !== ''){
        noteToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!'
    }
}


const deleteNote = (e) => {
    e.target.closest('li').remove()
}
document.addEventListener('DOMContentLoaded', main)