import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try{
        return  notesJSON ? JSON.parse(notesJSON) : []
    }
    catch(e){
        return []
    }
}

const getNotes = () => notes

const saveNotes = () =>  {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const createNote = () => {
    const id = uuidv4()
    const timeStamp = moment().valueOf()
    notes.push({ id: id ,title: '', body: '', createdAt: timeStamp, updatedAt: timeStamp })
    saveNotes()
    return id
}

const removeNote = (id) => {
    const notesIndex = notes.findIndex((note) => note.id === id)
    if(notesIndex > -1){
        notes.splice(notesIndex, 1)
        saveNotes()
    }
}

const sortNotes = (sortBy) => {
    if(sortBy === 'byEdited'){
        return notes.sort((a, b) => {
            if(a.updatedAt > b.updatedAt) return -1;
            else if(b.updatedAt > a.updatedAt) return 1;
            else return 0;  
        })
    } else if(sortBy === 'byCreated'){
           return notes.sort((a, b) => {
            if(a.createdAt < b.createdAt) return -1;
            else if(b.createdAt < a.createdAt) return 1;
            else return 0;
           })
    } else if(sortBy === 'alphabetically'){
        return notes.sort((a, b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            else if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            else return 0;
        })
    }
    else return notes
}

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)
    if(!note) return

    if(typeof updates.title === 'string'){
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }
    if(typeof updates.body === 'string'){
        note.body = updates.body
        note.updatedAt = moment().valueOf() 
    }
    saveNotes()
    return note
}

notes = loadNotes()

export {createNote, saveNotes, getNotes, removeNote, sortNotes, updateNote}