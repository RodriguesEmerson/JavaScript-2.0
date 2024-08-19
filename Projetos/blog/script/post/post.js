import { Comentario, gerarUUID, NewPost, RespostaComentario } from "../index/novoPost.js";
import { baseDeDados, SetPostBD } from "../modules/BD.js";
import { utils } from "../modules/utils.js";
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
      const component = `
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
      article.innerHTML = component;
      this.carregarComentarios();
   },

   carregarComentarios: function () {
      const comentarios = this.post.getComentario();
      for (const key in comentarios) {
         const comentario = comentarios[key];
         const htmlComent = utils.criarElemento('div', { class: 'coment' }, false, false);

         const component = `
            <div class="coment-content" id="${comentario.getId()}">
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
                   <div class="like-icon flex" data-id="${comentario.getId()}">
                     <span class="material-symbols-outlined like-heart">favorite</span>
                     <span class="like-number">${comentario.getLikes()}</span>
                  </div>
                  <div class="reply-icon flex" data-id="${comentario.getId()}">
                     <span class="material-symbols-outlined">reply</span>
                     <span>Responder</span>
                  </div>
               </div>
            </div>

            <div class="reply-box reply-coment hidden">
               <form class="new-coment">
                  <textarea name="new-coment" id="new-coment-answer" class="new-coment"
                     placeholder="Insira um comentário..."></textarea>
                  <div class="new-coment-buttons flex">
                     <button class="btn-new-coment-cancel" type="button">Cancelar</button>
                     <button class="btn-new-coment-submit" type="submit">Publicar</button>
                  </div>
               </form>
            </div>
         `
         htmlComent.innerHTML = component;
         this.carregaRespostaDoComentario(comentario, htmlComent)
         comentBox.appendChild(htmlComent);

      }

   },

   carregaRespostaDoComentario: function (comentario, htmlComent) {
      const comentAnswers = utils.criarElemento('div', { class: 'coment-answers' }, false, false);

      for (const key in comentario.getComentario()) {
         const answer = comentario.getComentario()[key];
         const comentAnswer = utils.criarElemento('div', { class: 'coment-answer', id: `${answer.getId()}` }, false, false);

         const component = `
         <div class="coment-header flex">
            <img class="coment-img" src="${answer.getImagem()}" alt="">
            <div class="flex">
               <span class="coment-autor">${answer.getAutor()}</span>
               <time datetime="${answer.getData()}">${utils.dataPorExtenso(answer.getData())}</time>
               <span class="replying-to-name">Resposta à ${answer.getrespComentario()}</span>
            </div>
         </div>
         
         <div class="coment-body">
         <p>${answer.getConteudo()}</p>
         </div>
         
         <div class="coment-footer flex">
            <div class="buttons-answers flex">
               <div class="like-icon flex" data-id="${answer.getId()}">
                  <span class="material-symbols-outlined like-heart">favorite</span>
                  <span class="like-number">${answer.getLikes()}</span>
               </div>
               <div class="reply-icon flex" data-id="${answer.getId()}">
                  <span class="material-symbols-outlined">reply</span>
                  <span>Responder</span>
               </div>
            </div>
         </div>
         
         <div class="reply-box hidden">
            <form class="new-coment">
               <textarea name="new-coment" id="new-coment-answer" class="new-coment"
               placeholder="Insira um comentário..."></textarea>
               <div class="new-coment-buttons flex">
                  <button class="btn-new-coment-cancel" type="button">Cancelar</button>
                  <button class="btn-new-coment-submit" type="submit">Publicar</button>
               </div>
            </form>
         </div>
         </div>
         `
         comentAnswer.innerHTML += component;
         comentAnswers.appendChild(comentAnswer);
      }
      htmlComent.appendChild(comentAnswers);
   }
}


const comentarioPost1 = new Comentario(
   './images/user-icon-1.png',
   'Usuário-1',
   false,
   `"Adorei o post! 🐶✨ Os filhotes realmente trazem tanta alegria e energia positiva para nossas vidas. As dicas são ótimas e muito úteis. Já estou colocando em prática algumas sugestões, como a socialização e a escolha da ração certa. Obrigada por compartilhar essas informações valiosas! 💖"`,
   {},
   '12/08/2024',
   false,
   `C${gerarUUID()}`,
   23,
)

const respostaParaComentario1 = new RespostaComentario(
   './images/user-icon-2.png',
   'Usuário-2',
   false,
   'Concordo',
   {},
   '13/08/2024',
   false,
   'CC3b190d63-32cb-4807-a5ba-9b650d0953ce',
   8,
   'Usuario-1',
)
const respostaParaComentario2 = new RespostaComentario(
   './images/user-icon-2.png',
   'Usuário-3',
   false,
   'Concordo',
   {},
   '13/08/2024',
   false,
   'CCf0s9df8-32db-4807-a5ba-9b653d0953ce',
   5,
   'Usuario-2',
)
carregaPost.setarPrototypes();
comentarioPost1.setComentario(respostaParaComentario1)
comentarioPost1.setComentario(respostaParaComentario2)
carregaPost.post.setComentario(comentarioPost1);
carregaPost.carregarArticle();


const eventos = {

   /******Ações do botão 'like' de cada comentário******/
   getButtonsLike: function () {
      const btnLike = document.querySelectorAll('.like-icon');
      const self = this;
      btnLike.forEach(element => {
         element.addEventListener('click', function (){
            const comentId = (element.getAttribute('data-id'))
            self.buttonLikeEventoHTML(comentId);
         })
      })
   },
   buttonLikeEventoHTML: function (comentId) {
      const comentario = (document.querySelector(`#${comentId}`))
      const likeNumber = document.querySelector(`[data-id="${comentId}"] .like-number`);
      const likeHeart = document.querySelector(`[data-id="${comentId}"] .like-heart`);
      let incrementarLikes = false
      let isComent = false


      if(comentario.classList.contains('coment-content')){
         isComent = true
      } 

      likeHeart.classList.toggle('liked');
      
      if(likeHeart.classList.contains('liked')){
         Number(likeNumber.innerHTML++);
         incrementarLikes = true
      }else{
         Number(likeNumber.innerHTML--)
      }
      this.buttonLikeEventoBD(comentId, isComent, incrementarLikes)
   },
   buttonLikeEventoBD: function(comentId, isComent, incrementarLikes){
      //Se for um comentário principal**************
      if(isComent){
         if(incrementarLikes){
            carregaPost.post.getComentario()[comentId]
               .incrementarLikes();
            return
         }
         carregaPost.post.getComentario()[comentId]
            .retirarLikes();
            return
      }
      
      //Se for a resposta de um comentário;************
      const comentarios = carregaPost.post.getComentario();
      Object.setPrototypeOf(comentarios, Comentario.prototype);
      let reply;
      //procura qual foi a resposta de comentário clicada em cada comentário pelo id
      for(const comentario in comentarios){
         try {
            reply =comentarios[comentario].getComentario()[comentId]
         } catch (error) {
            
         }      
      }
      
      if(incrementarLikes){
         reply.incrementarLikes();
      }else{
         reply.retirarLikes();
      }
   },

   /******Ações do botão 'responder' de cada comentário******/
   getButtonsReply: function () {
      const btnReply = document.querySelectorAll('.reply-icon');
      btnReply.forEach(element => {
         element.addEventListener('click', function () { });
      })
   },

   callMetodos: function () {
      this.getButtonsLike();
      this.getButtonsReply();
   }

}
eventos.callMetodos()
