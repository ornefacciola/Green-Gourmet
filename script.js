const name = document.getElementById('name')
const tel = document.getElementById('tel')
const elegi = document.getElementById('text')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Ingrese su Nombre')
    }

    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})