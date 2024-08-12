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



class NewPost {
   constructor(imagem, titulo, conteudo, comentario = {}, data, tags, id) {
      this._imagem = imagem;
      this._titulo = titulo;
      this._contudo = conteudo;
      this._data = data;
      this._comentario = comentario;
      this._tags = tags;
      this._id = id;
   }

   getImagem() {
      return this._imagem;
   }
   setImagem(imagem) {
      this._imagem = imagem;
   }

   getTitulo() {
      return this._titulo;
   }
   setTitulo(titulo) {
      this._titulo = titulo;
   }

   getConteudo() {
      return this._contudo;
   }
   setConteudo(conteudo) {
      this._contudo = conteudo;
   }

   getData() {
      return this._data;
   }
   setData(data) {
      this._data = data;
   }

   getComentarios() {
      return this._comentario
   }
   setComentario(comentario) {
      this._comentario = comentario
   }

   getTags() {
      return this._tags;
   }
   setTags(tags) {
      this._tags = tags;
   }

   getId() {
      return this._id;
   }
   setId(id) {
      this._id = id;
   }

}

class Comentario {
   constructor(autor, data, conteudo, likes = 0, comentarios = {}) {
      this._autor = autor;
      this._data = data;
      this._conteudo = conteudo;
      this._likes = likes;
      this._comentarios = comentarios; // Comentários aninhados
   }

   getAutor() {
      return this._autor;
   }
   setAutor(novoAutor) {
      this._autor = novoAutor;
   }

   getData() {
      return this._data;
   }
   setData(novaData) {
      this._data = novaData;
   }

   getConteudo() {
      return this._conteudo;
   }
   setConteudo(novoConteudo) {
      this._conteudo = novoConteudo;
   }

   getLikes() {
      return this._likes;
   }
   setLikes(novoLikes) {
      this._likes = novoLikes;
   }

   getComentarios() {
      return this._comentarios;
   }
   addComentario(id, comentario) {
      this._comentarios[id] = comentario;
   }

}

function gerarUUID() {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
   });
}