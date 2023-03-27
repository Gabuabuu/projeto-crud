// "Modelo" // Guarda dados da aplicação

const miniRedeSocial = {
    usuarios: [
        {
            username: 'gabryel',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'gabryel',
            content: 'Meu primeiro post'
        } // Sempre que for criado um "post" novo, esse array (posts) será atualizado
    ],
    criaPost(dados, htmlOnly = false) {
        if (!htmlOnly) {
            // Cria Posts na memoria (Array/Objeto)
            miniRedeSocial.posts.push({
                id: miniRedeSocial.posts.length + 1,
                owner: dados.owner,
                content: dados.content
            });
        }
        // Cria post no html
        const $listaDePosts = document.querySelector('.listaDePosts');
        $listaDePosts.insertAdjacentHTML('afterbegin', `<li>${dados.content}</li>`)
    }
}

// [Código Front End: Web]

const $meuForm = document.querySelector('form'); // $ para saber que a variavel está guardando um elemento do html
console.log($meuForm);

// CRUD: [READ]
miniRedeSocial.posts.forEach(({ owner, content }) => {
    miniRedeSocial.criaPost({ owner: owner, content: content }, true)

})


// CRUD: [CREATE]
$meuForm.addEventListener('submit', function criaPostController(infosDoEvento) {
    infosDoEvento.preventDefault()
    const $campoCriaPost = document.querySelector('input[name="criaPost"]');
    miniRedeSocial.criaPost({ owner: 'gabryel', content: $campoCriaPost.value })
    console.log(miniRedeSocial.posts)


    $campoCriaPost.value = ''
})