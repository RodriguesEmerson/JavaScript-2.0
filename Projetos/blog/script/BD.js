/**
 * imagem
 * titulo
 * conteudo
 * --comentarios
 * ----autor
 * ----data
 * ----qnt likes
 * ----respostas ao comentario
 * ------autor
 * ------data
 * ------qnt likes
 * ------respostas as respostas
 * data
 * tags
 * link(id)
 */

export const baseDeDados = {
   posts: {
      P9842938: {
         img: 'images/post-1.jpg',
         titulo: 'A Alegria dos Filhotes de Cães',
         autor: 'Emerson Rodrigues',
         conteudo: `
         Os filhotes de cães são verdadeiros pacotes de alegria que podem iluminar qualquer ambiente com suas travessuras e       carinhos. Eles não só trazem um brilho nos olhos dos seus donos, mas também exigem cuidados especiais para garantir que cresçam     saudáveis e felizes. Aqui estão algumas dicas e informações valiosas para ajudá-lo a aproveitar ao máximo a companhia desses pequenos tesouros:

            1. Criação de um Ambiente Aconchegante
            Filhotes precisam de um espaço seguro e confortável para se sentirem protegidos. Prepare uma área tranquila com uma cama macia e brinquedos apropriados para a idade deles. Certifique-se de que a área esteja livre de perigos, como fios expostos e pequenos objetos que possam ser engolidos.

            2. Nutrição Adequada
            A alimentação é crucial para o desenvolvimento saudável dos filhotes. Escolha uma ração de alta qualidade específica para filhotes, que forneça os nutrientes essenciais para o crescimento. Evite dar alimentos para adultos, pois eles podem não atender às necessidades nutricionais dos filhotes.

            3. Cuidados com a Saúde
            Visitas regulares ao veterinário são fundamentais para garantir que os filhotes estejam saudáveis. Eles precisam de vacinas, vermifugação e exames de rotina. Além disso, é importante seguir as orientações do veterinário sobre a desparasitação e a prevenção de doenças.

            4. Socialização e Treinamento
            A socialização é essencial para que os filhotes se tornem cães equilibrados e bem ajustados. Exponha-os a diferentes pessoas, ambientes e outros animais de forma gradual e positiva. Comece o treinamento básico desde cedo, usando métodos de reforço positivo para ensiná-los comandos simples e boas maneiras.

            5. Exercício e Brincadeiras
            Filhotes têm muita energia e precisam de exercícios regulares para se manterem saudáveis e felizes. Brincadeiras como correr, buscar e explorar são ótimas para gastar energia e estimular a mente. Certifique-se de oferecer brinquedos adequados para a idade e o tamanho deles.

            6. Amor e Atenção
            Por fim, lembre-se de que os filhotes precisam de muito amor e atenção. Eles são muito sensíveis e formam fortes laços com seus donos. Dedique tempo para interagir com eles, mostrando carinho e afeto. Esse vínculo é essencial para seu bem-estar emocional e para o desenvolvimento de uma relação sólida e confiável.

            Os filhotes de cães são uma bênção e uma alegria para quem os recebe. Com cuidados adequados e muito amor, você garantirá que eles cresçam saudáveis e felizes, tornando-se companheiros leais e amorosos por toda a vida. Aproveite cada momento com esses pequenos amigos e desfrute das maravilhas que eles trazem para sua vida! 🐶💖`,

         comentarios: {
            C84293903: {
               autor: 'Usuário-1',
               data: '12/08/2024',
               conteudo: `"Adorei o post! 🐶✨ Os filhotes realmente trazem tanta alegria e energia positiva para nossas vidas. As dicas são ótimas e muito úteis. Já estou colocando em prática algumas sugestões, como a socialização e a escolha da ração certa. Obrigada por compartilhar essas informações valiosas! 💖"`,
               likes: 23,
               comentarios: {
                  CC98273948: {
                     autor: 'Usuário-2',
                     respostaPara: 'Usuário-1',
                     data: '12/08/2024',
                     conteudo: 'Concordo!!!',
                     likes: 16,
                  }
               }
            }
         },
         data: '12/08/2024',
      }
   }
}


