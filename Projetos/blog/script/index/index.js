import { baseDeDados } from "../modules/BD.js";
import { utils } from "../modules/utils.js";

const postsRecentes = document.querySelector('.posts-recents');
const outrosPosts = document.querySelector('.outros-posts');
postsRecentes.innerHTML = '';
outrosPosts.innerHTML = '<p class="page-title">Outros Posts</p>';

const carregaPosts = {

   carregaPostsRecents: function(){
      let postCount = 0;
      for (const post in baseDeDados.posts) {

         const article = utils.criarElemento('article', { class: `blog-post flex` }, false, false);
         const blog = baseDeDados.posts[post];
         //Impede que a descrição do post tenha mais que 300 carecteres
         let conteudo = blog.getConteudo();
         conteudo = conteudo.substring(0, 370);

         if (postCount > 2){
            this.carregaOutrosPosts(article, blog, conteudo, post);
         }else{
            article.innerHTML = `
               <figure class="post-image">
                  <img src="${blog.getImagem()}" alt="">
               </figure>
               <header class="post-header">
                  <h1 class="post-title">${blog.getTitulo()}</h1>
               </header>
               <!--Conteúdo do Post-->
               <div class="post-content post-content-index" >
                  ${conteudo}
               </div>
               <!--Rodapé do Post--> 
               <footer class="post-footer flex">
                  <p>
                     Publicado em <time datetime="${blog.getData()}">
                     ${utils.dataPorExtenso(blog.getData())}</time>
                  </p>
                  <a class="read-more" 
                     href="https://rodriguesemerson.github.io/JavaScript-2.0/Projetos/blog/post.html?id=${post}" 
                     target="_blank" rel="noopener noreferrer">Ler Mais
                  </a>
               </footer>
            `
            postsRecentes.appendChild(article);
         }

         postCount++
      }
   },

   carregaOutrosPosts: function(article, blog, conteudo, post){
      article.innerHTML = 
      `<!--Imagem do Post-->
         <figure class="post-image">
            <img src="${blog.getImagem()}" alt="">
            <figcaption>legenda</figcaption>
         </figure>
         <div class="content-box flex">
            <header class="post-header">
               <h2 class="post-title">${blog.getTitulo()}</h2>
            </header>
            <!--Conteúdo do Post-->
            <div class="post-content">
               ${conteudo}
            </div>
         </div>
         <!--Rodapé do Post-->
         <footer class="post-footer flex">
            <p>Publicado em <time datetime="${blog.getData()}">${utils.dataPorExtenso(blog.getData())}</time></p>
            <a class="read-more" href="https://rodriguesemerson.github.io/JavaScript-2.0/Projetos/blog/post.html?id=${post}" 
            target="_blank" rel="noopener noreferrer">Ler Mais</a>
         </footer>
      `
      outrosPosts.appendChild(article)
   }

   //Criar função para gerar outros posts

}



carregaPosts.carregaPostsRecents()