const idLivro = document.querySelector('input[type=text]')
const btnBuscar = document.querySelector('input[type=button]')


btnBuscar.onclick = function(){

    fetch('http://localhost:8080/livros/' + idLivro.value)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else {
            throw new Error('Erro na requisição')
        }
    })
    .then(data => {
        document.querySelector('#id').textContent = data.id
        document.querySelector('#nome').textContent = data.nome
        document.querySelector('#autor').textContent = data.autor
        document.querySelector('#resumo').textContent = data.resumo
        document.querySelector('#editora').textContent = data.editora

    })
    .catch(error => {
        console.log('Erro: '+ error)
    })
}