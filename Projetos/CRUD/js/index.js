import { NovaToDo } from "./modules/classes.js";
const list = document.querySelector('.list')


const events = {
   formNovaToDoSubmit: function(){
      const formNewTodo = document.querySelector('.novo-item-form');
      formNewTodo.addEventListener('submit', (e) =>{
         e.preventDefault();
         const formData = new FormData(formNewTodo);
         const data = Object.fromEntries(formData)['texto'];
         createTodo.instanciarToDo(data);
      })
   },
   editFormClick: function(){
      const editBtns = document.querySelectorAll('.edit-item');
      editBtns.forEach(btn => {
         if(btn.classList.contains('event-added')) return;
         btn.addEventListener('click', (e) =>{
            const parentId = e.target.getAttribute(['data-parent-id']);
            const parentElement = document.querySelector(`#${parentId}`);
            const itemTexto = document.querySelector(`#${parentId} .item-texto`);
            const itemForm = document.querySelector(`#${parentId} .item-form`);
            const formTexto = document.querySelector(`#${parentId} .item-form input`)

            itemTexto.classList.toggle('hidden');
            itemForm.classList.toggle('hidden');

            formTexto.focus();
         })
         btn.classList.add('event-added');
      })
   },
   formsEditSubmit: function(){
      const submtBtns = document.querySelectorAll('.item-form');
      submtBtns.forEach(btn => {
         btn.addEventListener('click', (e) =>{
            e.preventDefault();
            const parentId = e.target.getAttribute(['data-parent-id']);
            updateToDo.update(parentId)
         });   
      });
   },
   callAddEvents: function(){
      this.editFormClick();
      this.formsEditSubmit();
   }
}
events.formNovaToDoSubmit();


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
   inserirNoDOM: async function(ToDo){
      
      const data = await this.pegarToDos();

      //Instacia cada item da lista para que tenham os getters e setters
      //de NovaTodo
      let ToDos =
          data.map(item => 
            new NovaToDo(item.texto, item.data, item.status, item.id)
         )
      if(ToDo){
         ToDos = ToDo;
      }
      ToDos.forEach(item => {
         const novoItem = document.createElement('div');
         novoItem.setAttribute('class', 'item');
         novoItem.setAttribute('id', `P${item.getId()}`)
         const compontent = `
            <div class="item-checkbox">
               <input type="checkbox" ${item.getStatus()} id="check-C${item.getId()}" class="hidden">
               <label for="check-C${item.getId()}" class="checkbox-label"></label>
            </div>
            <div class="item-content">
               <p class="item-texto">
               ${item.getTexto()}
               </p>
               <form class="item-form hidden">
                  <input name="texto" type="text" value="${item.getTexto()}" class="item-form-texto">
                  <button type="submit" class="item-submit-form">
                     Alterar
                  </button>
               </form>
            </div>
            <div class="item-options">
               <span class="edit-item material-symbols-outlined" data-parent-id="P${item.getId()}">
                  edit_note
               </span>
               <span class="delete-item material-symbols-outlined" data-parent-id="P${item.getId()}">
                  delete
               </span>
         `
         novoItem.innerHTML = compontent;
         list.appendChild(novoItem);
      });

      events.callAddEvents();
   }
}

const updateToDo = {
   update: function(parentId){
      
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