// Base de Dados Nossa

const miniRedeSocial = {
    usuarios: [
        {
            username: 'gabryel'
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'gabryel',
            content: 'Meu primeiro post'
        }
    ]
}

// CREATE

function criaPost(dados) {
    miniRedeSocial.posts.push({
        id: miniRedeSocial.posts.length +1,
        owner: dados.owner,
        content: dados.content
    });
}

criaPost({ owner: 'Gabryel', content: 'Meu primeiro post' })
criaPost({ owner: 'Gabryel', content: 'Meu segundo post' })

// READ

function pegaPosts() {
    return miniRedeSocial.posts
 }
 console.log(pegaPosts())

 // UPDATE
 function atualizaContentPost(id, novoConteudo) {
    const postAtualizado = pegaPosts().find((post) => {
        return post.id ===id
    })
    console.log(postAtualizado)
    postAtualizado.content = novoConteudo
 }
atualizaContentPost(1, 'novo conteudo do post')
console.log(pegaPosts())

 // DELETE

 function apagaPost(id) {
    const listaPostAtualizado = pegaPosts().filter((postAtual) => {
    return postAtual.id !== id;
    })
    miniRedeSocial.posts = listaPostAtualizado;
    console.log(listaPostAtualizado)
 }
 apagaPost(2)
 apagaPost(3 )
console.log(pegaPosts())