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
         const htmlComent = utils.criarElemento('div', { class: 'coment', id: `${comentario.getId()}` }, false, false);

         const component = `
            <div class="coment-content">
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

               <div class="reply-box principal hidden" data-id="${comentario.getId()}">
                  <form class="new-answer-form">
                     <textarea name="new-coment" class="new-answer"placeholder="Insira um comentário..."></textarea>
                     <div class="new-answer-buttons flex">
                        <button class="btn-new-coment-cancel" type="button">Cancelar</button>
                        <button class="btn-new-coment-submit" type="submit">Publicar</button>
                     </div>
                  </form>
               </div>
            </div>
            
            `
         htmlComent.innerHTML = component;
         this.carregaRespostaDoComentario(comentario, htmlComent, comentario.getId())
         comentBox.appendChild(htmlComent);

      }

   },

   carregaRespostaDoComentario: function (comentario, htmlComent, dataParentId, retornar) {
      const comentAnswers = utils.criarElemento('div', { class: 'coment-answers' }, false, false);

      //retornar simplismente retorna o novo comentario criado para ser inserido
      //pelo método eventos.submitActionsDOM na tela.
      if(!retornar){
         for (const key in comentario.getComentario()) {
            const answer = comentario.getComentario()[key];
            const reply = criarRespostaComentario(answer)
            comentAnswers.appendChild(reply);
         }
         htmlComent.appendChild(comentAnswers);

      }else{
         const answer = comentario;
         return criarRespostaComentario(answer);
      }

      function criarRespostaComentario(answer){
         const comentAnswer = utils.criarElemento('div', 
            { class: 'coment-answer', 
              id: `${answer.getId()}` 
            }, 
            false, 
            false
         );

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
         
         <div class="reply-box hidden" data-id="${answer.getId()}" data-parent-id="${dataParentId}">
            <form class="new-answer-form">
               <textarea name="new-coment" class="new-answer"
               placeholder="Insira um comentário..."></textarea>
               <div class="new-answer-buttons flex">
                  <button class="btn-new-coment-cancel" type="button">Cancelar</button>
                  <button class="btn-new-coment-submit" type="submit">Publicar</button>
               </div>
            </form>
         </div>
         
         `
         comentAnswer.innerHTML = component;
         return comentAnswer
      }
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

   /******************************Ações do botão 'like' de cada comentário**************************************/
   //***********************************************************************************************************/
   getButtonsLike: function () {
      const btnLike = document.querySelectorAll('.like-icon');
      const self = this;
      btnLike.forEach(element => {
         if(!element.classList.contains('event-added')){
            element.addEventListener('click', function () {
               const comentId = (element.getAttribute('data-id'))
               self.buttonLikeEventoDOM(comentId);
            });
            element.classList.add('event-added');
         }
      })
   },
   buttonLikeEventoDOM: function (comentId) {
      const comentario = (document.querySelector(`#${comentId}`))
      const likeNumber = document.querySelector(`[data-id="${comentId}"] .like-number`);
      const likeHeart = document.querySelector(`[data-id="${comentId}"] .like-heart`);
      let incrementarLikes = false
      let isComent = false


      if (comentario.classList.contains('coment')) {
         isComent = true
      }

      likeHeart.classList.toggle('liked');

      if (likeHeart.classList.contains('liked')) {
         Number(likeNumber.innerHTML++);
         incrementarLikes = true
      } else {
         Number(likeNumber.innerHTML--)
      }
      this.buttonLikeEventoBD(comentId, isComent, incrementarLikes)
   },
   buttonLikeEventoBD: function (comentId, isComent, incrementarLikes) {
      //***********Se for um comentário principal**************
      if (isComent) {
         if (incrementarLikes) {
            carregaPost.post.getComentario()[comentId]
            .incrementarLikes();
            return
         }
         carregaPost.post.getComentario()[comentId]
            .retirarLikes();
         return
      }

      //*********Se for a resposta de um comentário;************
      const comentarios = carregaPost.post.getComentario();
      //Seta os métodos de Comentario em comentarios.
      Object.setPrototypeOf(comentarios, Comentario.prototype);
      let reply;
      //procura qual foi a resposta de comentário clicada em cada comentário pelo id
      for (const comentario in comentarios) {
         try {
            reply = comentarios[comentario].getComentario()[comentId]
         } catch (error) {
            console.log(error)
         }
      };

      if (incrementarLikes) {
         reply.incrementarLikes();
      } else {
         reply.retirarLikes();
      };
   },

    /*****************************Ações do botão 'responder' de cada comentário*********************************/
   //***********************************************************************************************************/
   replyBoxAberta: false,
   replyTextAreaAberta: false,
   getButtonsReply: function () {
      const btnReply = document.querySelectorAll('.reply-icon');
      const self = this;
      btnReply.forEach(element => {
         if(!element.classList.contains('event-added')){
            element.addEventListener('click', function () {
               const comentId = element.getAttribute(['data-id']);
               self.buttonReplyEventoDOM(comentId);
            });
            element.classList.add('event-added');
         }
      });
   },
   buttonReplyEventoDOM: function (comentId) {
      //Fecha a caixa de resposta, se tiver, aberta ateriormente;
      if(this.replyBoxAberta){
         this.replyBoxAberta.classList.add('hidden');
      }
      const replyBox = document.querySelector(`#${comentId} .reply-box`);
      replyBox.classList.toggle('hidden');
      const replyTextArea = document.querySelector(`#${comentId} .new-answer`);
      
      replyTextArea.focus();
      this.replyBoxAberta = replyBox;
      this.replyTextAreaAberta = replyTextArea;
   },

   /*******************************Ações do botão 'publicar' de cada comentário*********************************/
   //***********************************************************************************************************/
   getFormsSubmit: function(){
      const forms = document.querySelectorAll('.new-answer-form');
      const self = this;
      
      forms.forEach(form => {
         //Garente que o evento seja adicionado apenas uma vez em cada form.
         if(!form.classList.contains('event-added')){
            form.addEventListener('submit', function(event){
               event.preventDefault();
               const comentario = form.closest('div');
               const formData = new FormData(form);   
               const resposta = Object.fromEntries(formData)['new-coment'];
      
               self.submitActions(comentario, resposta);

               //Formata o form.
               const textarea = form.firstElementChild
               textarea.value = '';
               comentario.classList.add('hidden')
            });
            form.classList.add('event-added');
         }
      });
     
   },
   submitActions: function(comentario, resposta){

      //Verifica se é um comentário principal ou uma resposta;
      let comentPaiId = false;
      //Pega o id do comentário em sí.
      const comentId = comentario.getAttribute(['data-id'])
      try {
         //Tenta pegar o id do comentário Pai, se tiver.
         comentPaiId = comentario.getAttribute(['data-parent-id'])
      } catch (error) {
         comentPaiId = false;
      }

      //Trás o autor do comentário respondido.
      const usuarioRespondido = this.pegarAutordoComentarioRespondido(comentId, comentPaiId)

      //Cria um novo comentário
      const novaResposta = new RespostaComentario(
         './images/user-icon-2.png',
         'Usuário-4',
         false,
         `${resposta}`,
         {},
         `${utils.dataHoje()}`,
         false,
         `CC4${gerarUUID()}`,
         8,
         `${usuarioRespondido}`,
      )

      //Se não tiver o comentPaiId é um comentário principal.
      if(!comentPaiId){
         this.inserirComentarioNoBD(comentId, novaResposta);
         this.inserirComentarioNoDOM(comentId, novaResposta);
         return
      }

      //Se tiver o comentPaiId é a resposta de um comentário.
      this.inserirComentarioNoBD(comentId, novaResposta, comentPaiId);
      this.inserirComentarioNoDOM(comentId, novaResposta, comentPaiId);
   },

   inserirComentarioNoBD:function(comentId, novaResposta, comentPaiId){
      //Se tiver o comentPaiId insere o novo comentario na baseDeDados através desse id.
      if(comentPaiId){
         carregaPost.post.getComentario()[`${comentPaiId}`].setComentario(novaResposta);
         return;
      }
      carregaPost.post.getComentario()[`${comentId}`].setComentario(novaResposta);
   },

   inserirComentarioNoDOM: function(comentId, novaResposta, comentPaiId){
      let respostasDoComentarioDOM;
      let HTMLdoNovoComentario;
      
      if(comentPaiId){
         respostasDoComentarioDOM = document.querySelector(`#${comentPaiId} .coment-answers`);
         HTMLdoNovoComentario = carregaPost.carregaRespostaDoComentario(novaResposta, respostasDoComentarioDOM, comentPaiId, true);
         
      }else{
         respostasDoComentarioDOM = document.querySelector(`#${comentId} .coment-answers`);
         HTMLdoNovoComentario = carregaPost.carregaRespostaDoComentario(novaResposta, respostasDoComentarioDOM, comentId, true);
      }

      respostasDoComentarioDOM.insertBefore(HTMLdoNovoComentario, respostasDoComentarioDOM.firstChild);
      
      this.callMetodos();
   },

   pegarAutordoComentarioRespondido: function(comentId, comentPaiId){
     if(comentPaiId){
        return carregaPost.post.getComentario()[`${comentPaiId}`].getComentario()[`${comentId}`].getAutor();
      }

      return carregaPost.post.getComentario()[`${comentId}`].getAutor();
   },

   /*******************************Ações do botão 'cancelar' de cada comentário*********************************/
   //***********************************************************************************************************/
   getCancelButtons: function(){
      const btnCancel = document.querySelectorAll('.btn-new-coment-cancel');
      const self = this;
      btnCancel.forEach(element =>{
         if(!element.classList.contains('event-added')){
            element.addEventListener('click', () =>{
               if(self.replyBoxAberta){
                  self.replyBoxAberta.classList.add('hidden');
                  self.replyTextAreaAberta.value = '';
               }
            })
            element.classList.add('event-added')
         }
      })
   },

   callMetodos: function () {
      this.getButtonsLike();
      this.getButtonsReply();
      this.getFormsSubmit();
      this.getCancelButtons();
   }
}
eventos.callMetodos();