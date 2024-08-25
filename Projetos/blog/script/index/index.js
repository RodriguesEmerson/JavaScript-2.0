import { baseDeDados } from "../modules/BD.js";
import { utils } from "../modules/utils.js";

const postsRecentes = document.querySelector('.posts-recents');
postsRecentes.innerHTML = '';
let article

const carregaPosts = {

   carregaPostsRecents:()=>{
      let postCount = 0;
      for (const post in baseDeDados.posts) {
         if (postCount == 4) return;
         const blog = baseDeDados.posts[post];
         //Impede que a descrição do post tenha mais que 300 carecteres
         let conteudo = blog.getConteudo();
         conteudo = conteudo.substring(0, 370);

         console.log(conteudo)
         article = utils.criarElemento('article', { class: `blog-post flex` }, false, false);
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
                  href="http://127.0.0.1:5500/Projetos/blog/post.html?id=${post}" 
                  target="_blank" rel="noopener noreferrer">Ler Mais
               </a>
            </footer>
         `
         postsRecentes.appendChild(article);
         postCount++
      }
   }

   //Criar função para gerar outros posts

}



carregaPosts.carregaPostsRecents()