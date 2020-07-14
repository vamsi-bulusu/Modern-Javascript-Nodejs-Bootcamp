import {getFilters} from './filters'
import {getTodos, toggleTodo, removeTodo} from './todos'

const renderTodos = () => {
    const todoEl = document.querySelector('#todos-div')
    const filters = getFilters()
    const filteredList = getTodos().filter(function (todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompletetodos = filteredList.filter((task) => !task.completed)

    todoEl.innerHTML = ''
    
    todoEl.appendChild(generateSummary(incompletetodos))
    
    if(filteredList.length > 0){
        filteredList.forEach((todo) => todoEl.appendChild(generateDomElement(todo)))
    } else{
        const messageEle = document.createElement('p')
        messageEle.classList.add('empty-message')
        messageEle.textContent = 'No to-dos to show'
        todoEl.appendChild(messageEle)
    }
    
}

const generateDomElement = (todo) => {
    const todoEle = document.createElement('label')
    const containerEle = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    
    checkbox.setAttribute('type', 'checkbox')
    containerEle.appendChild(checkbox)
    
    checkbox.checked = todo.completed

    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        renderTodos()
    })

    todoText.textContent = todo.text
    containerEle.appendChild(todoText)

    todoEle.classList.add('list-item')
    containerEle.classList.add('list-item__container')
    todoEle.appendChild(containerEle)

    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEle.appendChild(removeButton)

    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEle
}

const generateSummary = (incompletetodos) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const label = incompletetodos.length !== 1 ? 'todos' : 'todo' 
    summary.textContent = `You have ${incompletetodos.length} ${label} left`
    return summary
}

export {generateDomElement, generateSummary, renderTodos}