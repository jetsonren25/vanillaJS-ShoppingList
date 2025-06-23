let body = document.querySelector('body')

let h1 = document.createElement('h1')
h1.textContent = 'My Shopping List'
h1.setAttribute('id', 'shopping-list')

let container = document.createElement('div')
container.setAttribute('class', 'container')

let inputContainer = document.createElement('div')
inputContainer.setAttribute('class', 'input-container')

let input = document.createElement('input')
input.setAttribute('id', 'input')

let inputText = document.createElement('p')
inputText.setAttribute('id', 'input-text')
inputText.textContent = 'Enter a new item: '

let btn = document.createElement('button')
btn.setAttribute('id', 'btn')
btn.setAttribute('type', 'text')
btn.textContent = 'Add item'

let listContainer = document.createElement('div')
listContainer.setAttribute('class','list-container')

let shoppingList = document.createElement('ul')
shoppingList.setAttribute('id', 'shopping-list')



//Button function to take in input 
// function createItem(){
    // }
    
    
    body.appendChild(container)
    body.appendChild(listContainer)
    container.appendChild(h1)
    container.appendChild(inputContainer)
    inputContainer.appendChild(inputText)
    listContainer.appendChild(shoppingList)
    inputText.appendChild(input)
    inputText.appendChild(btn)
    
    btn.addEventListener('click', () => {
        let liSpan = document.createElement('span')
        liBtn = document.createElement('button')
        liBtn.textContent = 'delete'
        liBtn.setAttribute('id','li-btn')
        let listItem = document.createElement('li')
        liSpan.textContent = input.value
        input.value = ''
        listItem.appendChild(liSpan)
        listItem.appendChild(liBtn)
        shoppingList.appendChild(listItem)
})