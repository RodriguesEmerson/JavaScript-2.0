export const utils = {
    dataPorExtenso:(data)=>{
       let d = data.split('/')
       const dataReversa = `${d[2]}/${d[1]}/${d[0]}`
       const date = new Date(dataReversa).toLocaleDateString('pt-br', {day: '2-digit', month:'long', year:'numeric'})
       return date
    },
 
    criarElemento: (tipo, atributos, conteudo, elementoPai)=>{
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
 
 }
 