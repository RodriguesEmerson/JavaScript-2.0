import { baseDeDados, SetPostBD } from "../modules/BD.js";
import { NewPost, Comentario, RespostaComentario, gerarUUID } from "../index/novoPost.js"
const postView = document.querySelector('.post-view');

const carregaPost = {
   post: '',
   pegarBDLocalStorange: () =>{
      let BDLocalStorange = localStorage.getItem('dataBase');
      BDLocalStorange = JSON.parse(BDLocalStorange);
      SetPostBD.setTodosOsPosts(BDLocalStorange);
   },
   pegarIdURL: () => {
      const url = new URLSearchParams(window.location.search);
      const urlParam = url.get('id');
      return urlParam;
   },
   setarPrototype: () =>{
      this.post = baseDeDados.posts[this.pegarIdURL];
      Object.setPrototypeOf(this.post, NewPost.prototype);
   }
}

const criarNovoComentario = {
   comentario: (imagem, autor, titulo, conteudo, comentario, data, tags, id, likes)=>{
      return new Comentario(imagem, autor, titulo, conteudo, comentario, data, tags, id, likes)
   }
}
const comentario3 = criarNovoComentario.comentario(
   'img-1',
   'Usuário-1',
   false,
   `"Adorei o post! 🐶✨ Os filhotes realmente trazem tanta alegria e energia positiva para nossas vidas. As dicas são ótimas e muito úteis. Já estou colocando em prática algumas sugestões, como a socialização e a escolha da ração certa. Obrigada por compartilhar essas informações valiosas! 💖"`,
   {},
   '12/08/2024',
   false,
   gerarUUID(),
   23,
)
console.log(comentario3)



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