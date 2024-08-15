import { baseDeDados, SetPostBD } from "../modules/BD.js";

let BDLocalStorange = localStorage.getItem('dataBase');
BDLocalStorange = JSON.parse(BDLocalStorange)
SetPostBD.setTodosOsPosts(BDLocalStorange)
console.log(BDLocalStorange)


const url = new URLSearchParams(window.location.search)
const urlParam = url.get('id')
console.log(urlParam)

const postView = document.querySelector('.post-view');
console.log(baseDeDados)

const post = baseDeDados.posts['4a296087-2d74-44e2-be08-61966e3fd74a']
console.log(post)


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