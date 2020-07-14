import {createNote} from './notes'
import {setFilters} from './filters'
import {renderFilteredNotes} from './views'


renderFilteredNotes()

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = createNote()
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderFilteredNotes()
})

document.querySelector('#optional-filter').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderFilteredNotes()
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        renderFilteredNotes()
    }
})

