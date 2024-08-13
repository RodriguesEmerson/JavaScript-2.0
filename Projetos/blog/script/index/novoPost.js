
class NewPost {
    constructor(imagem, autor, titulo, conteudo, comentario, data, tags, id) {
       this._imagem = imagem;
       this._autor = autor
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

    getAutor(){
        return this._autor
    }
    setAutor(autor){
        this._autor = autor
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
       this._comentario[id] = comentario
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
 
 class Comentario extends NewPost {
    constructor(imagem, autor, titulo, conteudo, comentario, data, tags, id, likes) {
       super(imagem, autor, titulo, conteudo, comentario, data, tags, id);

       this._likes = likes;

    }
 
    getLikes() {
       return this._likes;
    }
    incrementarLikes() {
       this._likes++;
    } 
    retirarLikes(){
        this._likes--
    }
 }

 class RespostaComentario extends Comentario{
   constructor(imagem, autor, titulo, conteudo, comentario, data, tags, id, likes, respComentario) {
      super(imagem, autor, titulo, conteudo, comentario, data, tags, id, likes);

      this._respComentario = respComentario;

   }

   getrespComentario(){
      return this._respComentario;
   }
   alterarrespComentario(respComentario){
      this._respComentario = respComentario;
   }
   addrespComentario(respComentario){
      this._respComentario[respComentario] = respComentario;
   }

 }

 const coment = new RespostaComentario('imagem', 'autor', 'titulo', 'conteudo', {}, 'data', 'tags', gerarUUID(), 'likes' );

//  coment.setComentario({coment: 'Novo comentario'});
 

 console.log(coment)
 function gerarUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
       const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
 }

export { NewPost, Comentario, RespostaComentario, gerarUUID }

// Aplicativo de blog onde você pode criar, editar e excluir posts, e adicionar comentários.
// Objetos/Classes:
// •Post: 
//      atributos:
//          título, 
//          conteúdo,
//          data de publicação,
//          views

// •Comentário:
//      atributos:
//          autor, 
//          conteúdo,
//          data

// •Blog: Com métodos para gerenciar posts e comentários.

// •Implementação:
// •	Encapsulamento: Usar métodos públicos e privados para controlar o acesso aos dados.
// •	Herança: Criar classes base e subclasses para modelar diferentes tipos de objetos.
// •	Polimorfismo: Implementar métodos que podem ser sobrescritos em subclasses para comportamentos específicos.
// •	Composição: Utilizar objetos dentro de outros objetos para criar relações e interações.

