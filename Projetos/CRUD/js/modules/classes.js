export class NovaToDo {
   constructor(texto, data, status, id) {
      this._texto = texto;
      this._data = data;
      this._status = status;
      this._id = id;
   }

   //Getters
   getTexto() {
      return this._texto;
   }
   getData(){
      return this._data;
   }
   getStatus(){
      return this._status;
   }
   getId(){
      return this._id;
   }

   //Setters
   setTexto(novoTexto){
      this._texto = novoTexto;
   }
   setData(novaData){
      this._data = novaData;
   }
   setStatus(novoSatatus){
      this._status = novoSatatus;
   }
}
