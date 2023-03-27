// Base de Dados Nossa

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
     criaPost(dados) {
        miniRedeSocial.posts.push({
            id: miniRedeSocial.posts.length + 1,
            owner: dados.owner,
            content: dados.content
        });
    }
}

miniRedeSocial.criaPost({ owner: 'gabryel', content: 'segudno post' })
console.log(miniRedeSocial.posts)

// [Código Front End: Web]

const $meuForm = document.querySelector('form'); // $ para saber que a variavel está guardando um elemento do html
console.log($meuForm);

$meuForm.addEventListener('submit', function criaPostController(infosDoEvento) {
    infosDoEvento.preventDefault()
    const $campoCriaPost = document.querySelector('input[name="criaPost"]');
    const $listaDePosts = document.querySelector('.listaDePosts');


    console.log("Post novo criado com sucesso")
    $listaDePosts.insertAdjacentHTML('afterbegin', `<li>${$campoCriaPost.value}</li>`)
    $campoCriaPost.value = ''
})