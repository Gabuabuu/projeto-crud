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
    return miniTwitter.posts
 }
 console.log(pegaPosts())