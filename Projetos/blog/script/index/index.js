import { baseDeDados } from "../BD.js";;

const posts = document.querySelector('#posts');
posts.innerHTML = '';

for (const post in baseDeDados.posts) {
   console.log(baseDeDados.posts[post]);
   const section = criarElemento('section', { class: 'post-recents flex' }, false, posts);
   const article = criarElemento('article', { class: 'blog-pos flex' }, false, section);
   const figure = criarElemento('figure', { class: 'post-image' }, false, article);
   const imagem = criarElemento('img', {src: `${baseDeDados.posts[post][img]}`}, false, figure)
  
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

console.log(posts)