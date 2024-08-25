import { NewPost } from "../index/novoPost.js";
import { baseDeDados } from "../modules/BD.js";
import { utils } from "../modules/utils.js";

const postsRelacionadosDOM = document.querySelector('.posts-relacionados');
postsRelacionadosDOM.innerHTML = '<p class="page-title">Relacionados</p>';


export const postsRelacionadosFunc = {
   selecionarPostsRelacionados: function(tagsDoPostAberto, idDoPost){
      const postsRelacionados = [];
      for (const key in baseDeDados.posts){
         const post = this.setarPrototypes(baseDeDados.posts[key]);
         const tags = post.getTags();
         let matchs = 0;
         //Verifica se o post analizado é o mesmo post aberto.
         idDoPost != post.getId() ? matchs = this.verificarMatchs(tags, tagsDoPostAberto) : '';

         matchs >= 2 ? postsRelacionados.push(key) : '';      
      }
      this.carregarPostsRelacionados(postsRelacionados);
   },
   verificarMatchs: function(tags, tagsDoPostAberto){
      let matchs = 0;
      tagsDoPostAberto.forEach(tag => {
         tags.forEach(tagCompare => {
            if(tagCompare == tag) matchs++
         })
      });
      return matchs;
   },
   setarPrototypes: function(post){
      //Seta os prototypes de Newpost em todos os posts da baseDeDados
      return Object.setPrototypeOf(post, NewPost.prototype)
   },

   carregarPostsRelacionados: function(postsRelacionados){
      postsRelacionados.forEach(key => {
         const post = baseDeDados.posts[key];
         const article = utils.criarElemento('article', {class: 'blog-post flex'});
         article.innerHTML = `
            <figure class="post-image">
               <img src="${post.getImagem()}" alt="">
               <figcaption>Imagem do Post</figcaption>
            </figure>
            <header class="post-header">
               <h2 class="post-title">${post.getTitulo()}</h2>
            </header>
            <footer class="post-footer flex">
               <p><time datetime="${post.getData()}">${utils.dataPorExtenso(post.getData())}</time></p>
               <a class="read-more" href="http://127.0.0.1:5500/Projetos/blog/post.html?id=${key}" 
                  target="_self" rel="noopener noreferrer">Ler Mais</a>
            </footer>
         `
         postsRelacionadosDOM.appendChild(article)
      })
   }
   
   
}

//fazer um loop nos posts da base de dados ---------------------------[]
//pegas as tags destes post ------------------------------------------[]
//para cada tag fazer um forEach -------------------------------------[]
//verificando quantas tags são iguais as tags do post aberto. --------[]
//criar uma variavel que acumula a quantidade de matchs. -------------[]
//se a quantidade de match for igual ou maior a 2. -------------------[]
//armazena o ID desse post em um array com os IDS. -------------------[]

//Carrega os posts na aba relacionados -------------------------------[]
