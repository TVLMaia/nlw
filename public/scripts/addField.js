//procurar o botao
document.querySelector("#add-time")// procura o botao na pg
//quando clicar no botao
.addEventListener('click', cloneField) // escuta quando clicarem


//execute uma ação
function cloneField() {
//duplicar os campos. que campo?
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean true ou false
//const é uma variavel que quando estabelecida nao pode ser alterada


//pegar os campos. que campos?
const fields = newFieldContainer.querySelectorAll('input')

//para cada campo, limpar
fields.forEach(function(field) {
    //pegar o field de cada momento e lempa ele
field.value = ""
})
//colocar na pagina. mas onde?
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

