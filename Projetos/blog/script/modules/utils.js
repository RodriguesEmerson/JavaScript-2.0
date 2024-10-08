export const utils = {
   dataPorExtenso: (data) => {
      let d = data.split('/')
      const dataReversa = `${d[2]}/${d[1]}/${d[0]}`
      const date = new Date(dataReversa).toLocaleDateString('pt-br', { day: '2-digit', month: 'long', year: 'numeric' })
      return date
   },

   dataHoje: ()=>{
      const hoje = new Date().toLocaleDateString('pt-br', {day: '2-digit', month: '2-digit', year: 'numeric'});
      return hoje;
   },

   criarElemento: (tipo, atributos, conteudo, elementoPai, returnInnerHTML) => {
      const elemento = document.createElement(tipo);

      for (const att in atributos) {
         elemento.setAttribute(`${att}`, `${atributos[att]}`)
      }
      if (conteudo) {
         elemento.innerHTML = conteudo;
      }
      if (elementoPai) {
         elementoPai.appendChild(elemento)
      }

      if(returnInnerHTML){
         const parent = document.createElement('span')
         parent.appendChild(elemento)
         return parent.innerHTML;
      }
      return elemento
   },
}
