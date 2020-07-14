// Bonus: Add a watcher for local storage

import {createTodo, loadTodos} from './todos'
import {renderTodos} from './views'
import {setFilters} from './filters'


renderTodos()

document.querySelector('#todos-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.addtodos.value.trim()
    if(text.length > 0){
        createTodo(text)        
        renderTodos()
        e.target.elements.addtodos.value = ''
    }
})

document.querySelector('#filter-todos').addEventListener('input', (e) => {
    setFilters({ searchText : e.target.value })
    renderTodos()
})

document.querySelector('#filter-check').addEventListener('change', (e) => {
    setFilters({ hideCompleted :  e.target.checked })
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if(e.key === 'todos'){
        loadTodos()
        renderTodos()
    }
})