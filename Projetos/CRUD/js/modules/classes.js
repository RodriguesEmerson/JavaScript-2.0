export class NovaToDo {
   constructor(texto, data, checked, id) {
      this._texto = texto;
      this._data = data;
      this._checked = checked;
      this._id = id;
   }

   //Getters
   getTexto() {
      return this._texto;
   }
   getData(){
      return this._data;
   }
   getChecked(){
      return this._checked;
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
   setChecked(novaChecked){
      this._checked = novaChecked;
   }
}
