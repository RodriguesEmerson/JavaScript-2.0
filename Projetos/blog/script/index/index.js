import { baseDeDados } from "../modules/BD.js";
import { utils } from "../modules/utils.js";

const postsRecentes = document.querySelector('.posts-recents');
postsRecentes.innerHTML = '';
let article

const carregaPosts = {

   carregaPostsRecents:()=>{
      for (const post in baseDeDados.posts) {
         const blog = baseDeDados.posts[post];
         console.log(blog)
         article = utils.criarElemento('article', { class: 'blog-post flex' }, false, false);
         article.innerHTML = `
            <figure class="post-image">
               <img src="${blog.getImagem()}" alt="">
            </figure>
            <header class="post-header">
               <h2 class="post-title">${blog.getTitulo()}</h2>
            </header>
            <!--Conteúdo do Post-->
            <div class="post-content">
               <p>${blog.getConteudo()}</p>
            </div>
            <!--Rodapé do Post-->
            <footer class="post-footer flex">
               <p>
                  Publicado em <time datetime="${blog.getData()}">
                  ${utils.dataPorExtenso(blog.getData())}</time>
               </p>
               <a class="read-more" 
                  href="http://127.0.0.1:5500/Projetos/blog/post.html?id=${post}" 
                  target="_blank" rel="noopener noreferrer">Ler Mais
               </a>
            </footer>
         `
         postsRecentes.appendChild(article)
      }
   }

}



carregaPosts.carregaPostsRecents()