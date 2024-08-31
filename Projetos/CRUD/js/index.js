import { NovaToDo } from "./modules/classes.js";
const list = document.querySelector('.list')
const formNewTodo = document.querySelector('.novo-item-form');
formNewTodo.addEventListener('submit', (e) =>{
   e.preventDefault();
   const formData = new FormData(formNewTodo);
   const data = Object.fromEntries(formData)['texto'];
   createTodo.instanciarToDo(data);
})

const createTodo = {
   instanciarToDo: function(texto){
      const ToDo = new NovaToDo(texto, this.dataHoje(), false);
      this.inserirTodoNaDB(ToDo)
   },
   dataHoje: function(){
      return new Date().toLocaleDateString(
         'pt-br', {day: '2-digit', month: 'long', year: 'numeric'}
      )
   },
   inserirTodoNaDB: async function(ToDo){
      await fetch('http://localhost:3000/list',
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json; charst=UTF-8'
            },
            body: JSON.stringify(
               {  
                  //O ID esta sendo ignorado pelo json-server;
                  id: ToDo.getId(),
                  texto: ToDo.getTexto(),
                  data: ToDo.getData(),
                  status: ToDo.getStatus(),
               }
            )
         }
      )
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
   },
}

const loadToDos = {
   pegarToDos: function(){
      return  fetch('http://localhost:3000/list')
         .then(response => response.json())
         .catch(error => console.log(error))
   },
   inserirNoDOM: async function(){
      const data = await this.pegarToDos();

      //Instacia cada item da lista para que tenham os getters e setters
      //de NovaTodo
      const ToDos =
          data.map(item => 
            new NovaToDo(item.texto, item.data, item.status, item.id)
         )
     
      ToDos.forEach(item => {
         const compontent = `
         <div class="item">
            <div class="item-checkbox">
               <input type="checkbox" checked="${item.getStatus()}" id="check-${item.getId()}" class="hidden">
               <label for="check-${item.getId()}" class="checkbox-label"></label>
            </div>
            <div class="item-content">
               <p class="item-texto hidden">
               ${item.getTexto()}
               </p>
               <form class="item-form ">
                  <input name="texto" type="text" value="${item.getTexto()}" class="item-form-texto">
                  <button type="submit" class="item-submit-form">
                     Alterar
                  </button>
               </form>
            </div>
            <div class="item-options">
               <span class="material-symbols-outlined">
                  edit_note
               </span>
               <span class="material-symbols-outlined">
                  delete
               </span>
            </div>
         `
         console.log(compontent)
      });
   }
}

loadToDos.inserirNoDOM()











































// //*******************************GET********************* */
const id = 5;
// function pegaDados(){
//    return fetch(`http://localhost:3000/list/${id}`)
//             .then(response => response.json())
//             .catch(error => console.log(error))
// } 
// let dados;
// async function teste() {
//    dados = await pegaDados();

//    console.log(dados)
// }
async function buscar() {
   const data = await fetch(`http://localhost:3000/list/${id}`)
      .then(response => response.json())
      .catch(error => console.log('Nenhum item encontrado!'));

   console.log(data)
}
// buscar()

//*******************************POST********************* */
async function criar() {
   await fetch("http://localhost:3000/list",
      {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json; charset=UTF-8'
         },
         body: JSON.stringify({
            id: 13,
            descricao: "Planejamento estratégico",
            data: "2024-08-29"
         })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
}

// criar()

//*******************************PUT********************* */
async function atualizar() {
   await fetch("http://localhost:3000/list/5",
      {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json; charset=UTF-8'
         },
         body: JSON.stringify({
            descricao: "TESTE",
         })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
}
// atualizar()



//*******************************DELETE********************* */
async function deletar() {
   await fetch('http://localhost:3000/list/31',
      {
         method: 'DELETE'
      }
   )
   .then(() => console.log('Item deletado'))
   .catch(error => console.log('ERRO: ' + error))
}
// deletar();
//        (URL)              (EndPoint)      (id)
//http://localhost:3000_______/list___________/5