import moment from 'moment'
import {getFilters} from './filters'
import {sortNotes, getNotes} from './notes'


const generateDomElement = (note) => {
    const noteEle = document.createElement('a')
    const textEle = document.createElement('p')
    const statusEle = document.createElement('p')

    if(note.title.length > 0){
        textEle.textContent = note.title
    } else{
        textEle.textContent = 'Unnamed note'
    }
    textEle.classList.add('list-item__title')
    noteEle.appendChild(textEle)

    noteEle.setAttribute('href', `/edit.html#${note.id}`)
    noteEle.classList.add('list-item')

    statusEle.textContent = generateLastEdited(note.updatedAt)
    statusEle.classList.add('list-item__subtitle')
    noteEle.appendChild(statusEle)
    
    return noteEle
}


const renderFilteredNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredList = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''
    if(filteredList.length > 0){
        filteredList.forEach((note) => {
            const domEle = generateDomElement(note)
            notesEl.appendChild(domEle)
        })
    } else{
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const dateElement = document.querySelector('#last-edited')
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if(!note){
        location.assign('/index.html')
    }

    titleElement.value = note.title
    bodyElement.value  = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
}

const generateLastEdited = (timeStamp) => `last edited ${moment(timeStamp).fromNow()}`

export {generateDomElement, generateLastEdited, renderFilteredNotes, initializeEditPage}