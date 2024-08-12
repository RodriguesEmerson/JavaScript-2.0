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

const baseDeDados = {
   posts: {
      P9842938: {
         img: './imagens/img-1',
         titulo: 'Titulo',
         autor: 'autor',
         conteudo: 'Conteudo',
         comentarios: {
            C84293903: {
               autor: 'autor1',
               data: '12/08/2024',
               conteudo: 'Comentario aqui',
               likes: 0,
               comentarios: {
                  CC98273948: {
                     autor: 'autor2',
                     respostaPara: 'autor1',
                     data: '12/08/2024',
                     conteudo: 'Comentario aqui',
                     likes: 0,
                  }
               }
            }
         },
         data: '12/08/2024',
      }
   }
}


