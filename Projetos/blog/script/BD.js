/**
 * imagem
 * titulo
 * conteudo
 * --comentarios
 * ----autor
 * ----data
 * ----qnt likes
 * ----respostas ao comentario
 * ------autor
 * ------data
 * ------qnt likes
 * ------respostas as respostas
 * data
 * tags
 * link(id)
 */

export const SetPostBD = {
   setPost(newPost){
      baseDeDados.posts[newPost.getId()] = newPost;
      console.log(baseDeDados.posts)
   },

}

export const baseDeDados = {
   posts: {
      
   }
}


