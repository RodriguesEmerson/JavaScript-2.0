export const SetPostBD = {
   setPost(newPost){
      baseDeDados.posts[newPost.getId()] = newPost;
      this.salvarLocalStorange()
   },

   salvarLocalStorange: () =>{
      //salvar em local storange apenas para os dados persistirem,
      //já que nao vêm de uma API.
      localStorage.clear();
      const dataBase = JSON.stringify(baseDeDados);
      localStorage.setItem('dataBase', dataBase);
   },

   setTodosOsPosts: (BDLocalStorange) =>{
      //Este método serve apenas para que a baseDeDados se atualize
      //com os dados criados em construirBD.js no script post.js;
      baseDeDados = BDLocalStorange;
   }

}

export let baseDeDados = {
   posts: {
      
   }
}


