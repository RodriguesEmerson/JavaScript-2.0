import { baseDeDados } from "../BD.js";;

const postsRecentes = document.querySelector('.posts-recents');
postsRecentes.innerHTML = '';
let article
for (const post in baseDeDados.posts) {
   const blog = baseDeDados.posts[post];
   console.log(blog)
   article = criarElemento('article', { class: 'blog-post flex' }, false, false);
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
            ${dataPorExtenso(blog.getData())}</time>
         </p>
         <a class="read-more" 
            href="http://127.0.0.1:5500/Projetos/blog/post.html?${post}" 
            target="_blank" rel="noopener noreferrer">Ler Mais
         </a>
      </footer>
   `
   postsRecentes.appendChild(article)
}

function dataPorExtenso(data){
   let d = data.split('/')
   const dataReversa = `${d[2]}/${d[1]}/${d[0]}`
   const date = new Date(dataReversa).toLocaleDateString('pt-br', {day: '2-digit', month:'long', year:'numeric'})
   return date
}

function criarElemento(tipo, atributos, conteudo, elementoPai) {
   const elemento = document.createElement(tipo);

   for (const att in atributos) {
      elemento.setAttribute(`${att}`, `${atributos[att]}`)
   }
   if(conteudo){
      elemento.innerHTML = conteudo;
   }
   if (elementoPai) {
      elementoPai.appendChild(elemento)
   }
   return elemento
}
