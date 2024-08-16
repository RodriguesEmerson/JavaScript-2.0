import { baseDeDados, SetPostBD } from "../modules/BD.js";
import { NewPost, Comentario, RespostaComentario, gerarUUID } from "../index/novoPost.js"
import { utils } from "../modules/utils.js"
const postView = document.querySelector('.post-view');
const article = document.querySelector('.blog-post')

const carregaPost = {
   post: '',
   pegarBDLocalStorange: ()=> {
      let BDLocalStorange = localStorage.getItem('dataBase');
      BDLocalStorange = JSON.parse(BDLocalStorange);
      SetPostBD.setTodosOsPosts(BDLocalStorange);
   },
   idDoPost: ()=> {
      const url = new URLSearchParams(window.location.search);
      const urlParam = url.get('id');
      return urlParam;
   },
   setarPrototypes: function() {
      this.pegarBDLocalStorange();
      this.post = baseDeDados.posts[this.idDoPost()];
      Object.setPrototypeOf(this.post, NewPost.prototype);
   },

   criarArticle: function() {
    return  `
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
   },

   renderizarArticle: function(){
      article.innerHTML = '';
      article.innerHTML = this.criarArticle();
   }

}

carregaPost.setarPrototypes()
carregaPost.renderizarArticle()
const criarNovoComentario = {
   comentario: (imagem, autor, titulo, conteudo, comentario, data, tags, id, likes)=>{
      return new Comentario(imagem, autor, titulo, conteudo, comentario, data, tags, id, likes)
   }
}



// `
// <article class="blog-post flex">
//    <header class="post-header">
//       <h2 class="post-title">Título do Post</h2>
//       <p>Escrito por <strong class="post-autor">Emerson R</strong>, <time datetime="09/08/2024">9 de Agosto de 2024</time></p>
//    </header>
//    <div class="post-body">
//       <!--Imagem do Post-->
//       <figure class="post-image">
//          <img src="images/post-1.jpg" alt="">
//       </figure>
//       <!--Conteúdo do Post-->
//       <div class="post-content">
//          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero accusantium aliquid eum
//             reprehenderit, possimus at incidunt quis neque vel assumenda nesciunt ullam nobis expedita
//             porro voluptate consectetur, laborum minus veniam.</p>
//       </div>
//    </div>
// </article>
// `