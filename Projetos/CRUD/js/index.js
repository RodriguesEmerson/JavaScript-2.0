
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