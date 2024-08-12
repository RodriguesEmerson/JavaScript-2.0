


// Aplicativo de blog onde você pode criar, editar e excluir posts, e adicionar comentários.
// Objetos/Classes:
// •Post: 
//      atributos:
//          título, 
//          conteúdo,
//          data de publicação,
//          views

// •Comentário:
//      atributos:
//          autor, 
//          conteúdo,
//          data

// •Blog: Com métodos para gerenciar posts e comentários.

// •Implementação:
// •	Encapsulamento: Usar métodos públicos e privados para controlar o acesso aos dados.
// •	Herança: Criar classes base e subclasses para modelar diferentes tipos de objetos.
// •	Polimorfismo: Implementar métodos que podem ser sobrescritos em subclasses para comportamentos específicos.
// •	Composição: Utilizar objetos dentro de outros objetos para criar relações e interações.



// class Pessoa {
//     // Construtor
//     constructor(nome, idade) {
//         this._nome = nome;  // Atributos privados convencionais com prefixo _ ou #
//         this._idade = idade;
//     }

//     // Getter para o atributo nome
//     getNome() {
//         return this._nome;
//     }

//     // Setter para o atributo nome
//     setNome(nome) {
//         this._nome = nome;
//     }

//     // Getter para o atributo idade
//     getIdade() {
//         return this._idade;
//     }

//     // Setter para o atributo idade
//     setIdade(idade) {
//         if (idade >= 0) {  // Lógica de validação
//             this._idade = idade;
//         }
//     }
// }

// // Exemplo de uso
// const pessoa = new Pessoa('João', 30);

// console.log(pessoa.getNome()); // João
// console.log(pessoa.getIdade()); // 30

// pessoa.setNome('Maria');
// pessoa.setIdade(25);

// console.log(pessoa.getNome()); // Maria
// console.log(pessoa.getIdade()); // 25
// console.log(pessoa._nome); // undefined (tentativa de acesso direto falha)