import { baseDeDados, SetPostBD } from "../modules/BD.js";
import { NewPost, Comentario, RespostaComentario, gerarUUID } from "../index/novoPost.js"
import { utils } from "../modules/utils.js"
const postView = document.querySelector('.post-view');
const article = document.querySelector('.blog-post');
const comentBox = document.querySelector('.coments-box');

const carregaPost = {
   post: '',
   pegarBDLocalStorange: () => {
      let BDLocalStorange = localStorage.getItem('dataBase');
      BDLocalStorange = JSON.parse(BDLocalStorange);
      SetPostBD.setTodosOsPosts(BDLocalStorange);
   },
   idDoPost: () => {
      const url = new URLSearchParams(window.location.search);
      const urlParam = url.get('id');
      return urlParam;
   },
   setarPrototypes: function () {
      this.pegarBDLocalStorange();
      this.post = baseDeDados.posts[this.idDoPost()];
      Object.setPrototypeOf(this.post, NewPost.prototype);
   },

   carregarArticle: function () {
      const htmlCode =  `
         <header class="post-header">
            <h2 class="post-title">${this.post.getTitulo()}</h2>
            <p>Escrito por <strong class="post-autor">Emerson R</strong>, 
               <time datetime="${this.post.getData()}">${utils.dataPorExtenso(this.post.getData())}</time>
            </p>
         </header>
         <div class="post-body">
            <!--Imagem do Post-->
            <figure class="post-image">
               <img src="${this.post.getImagem()}" alt="">
            </figure>
            <!--Conteúdo do Post-->
            <div class="post-content">
               ${this.post.getConteudo()}
            </div>
         </div>
      `  
      article.innerHTML = '';
      article.innerHTML = htmlCode;
      this.carregarComentarios();
   },

   carregarComentarios: function () {
      const comentarios = this.post.getComentario();
      for(const key in comentarios){
         const comentario = comentarios[key]
         const htmlCode = `
         <div class="coment">
            <div>
               <div class="coment">
                  <div class="coment-header flex">
                     <img class="coment-img" src="${comentario.getImagem()}" alt="">
                     <div class="flex">
                        <span class="coment-autor">${comentario.getAutor()}</span>
                        <time datetime="${comentario.getData()}">${utils.dataPorExtenso(comentario.getData())}</time>
                     </div>
                  </div>

                  <div class="coment-body">
                     <p>${comentario.getConteudo()}</p>
                  </div>
                  
                  <div class="coment-footer flex">
                     <div class="like-icon flex">
                        <span class="material-symbols-outlined like-heart">favorite</span>
                        <span class="like-number">${comentario.getLikes()}</span></div>
                     <div class="reply-icon flex">
                        <span class="material-symbols-outlined">reply</span>
                        <span>Responder</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         `
         comentBox.innerHTML = '';
         comentBox.innerHTML = htmlCode;
      }
      
   },
}

const comentarioPost1 = new Comentario(
   './images/user-icon-1.png',
   'Usuário-1',
   false,
   `"Adorei o post! 🐶✨ Os filhotes realmente trazem tanta alegria e energia positiva para nossas vidas. As dicas são ótimas e muito úteis. Já estou colocando em prática algumas sugestões, como a socialização e a escolha da ração certa. Obrigada por compartilhar essas informações valiosas! 💖"`,
   {},
   '12/08/2024',
   false,
   gerarUUID(),
   23,
)

const respostaParaComentario1 = new RespostaComentario(
   'img-2',
   'Usuário-2',
   false,
   'Concordo',
   {},
   '12/08/2024',
   false,
   '4b190d63-32cb-4807-a5ba-9b650d0953ce',
   23,
   'Usuario-1',
)
carregaPost.setarPrototypes();
comentarioPost1.setComentario(respostaParaComentario1)
carregaPost.post.setComentario(comentarioPost1);


carregaPost.carregarArticle();

