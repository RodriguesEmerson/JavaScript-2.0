//Esse script serve apenas para crir a BD com seus getters e setters,
import { NewPost, Comentario, RespostaComentario, gerarUUID } from "./index/novoPost.js"
import { SetPostBD } from "./modules/BD.js"

const post1 = new NewPost(
    'images/post-1.jpg',
    'Emerson Rodrigues',
    'A Alegria dos Filhotes de Cães',
    `Os filhotes de cães são verdadeiros pacotes de alegria que podem iluminar qualquer ambiente com suas travessuras e       carinhos. Eles não só trazem um brilho nos olhos dos seus donos, mas também exigem cuidados especiais para garantir que cresçam     saudáveis e felizes. Aqui estão algumas dicas e informações valiosas para ajudá-lo a aproveitar ao máximo a companhia desses pequenos tesouros:

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
    {},
    '12/08/2024',
    ['Filhotes', 'cachorros', 'dicas'],
    gerarUUID(),
)

const comentarioPost1 = new Comentario(
    'img-1',
    'Usuário-1',
    false,
    `"Adorei o post! 🐶✨ Os filhotes realmente trazem tanta alegria e energia positiva para nossas vidas. As dicas são ótimas e muito úteis. Já estou colocando em prática algumas sugestões, como a socialização e a escolha da ração certa. Obrigada por compartilhar essas informações valiosas! 💖"`,
    {},
    '12/08/2024',
    false,
    gerarUUID(),
    23,
)

const respostaParaComentario1 = new RespostaComentario(
    'img-2',
    'Usuário-2',
    false,
    'Concordo',
    {},
    '12/08/2024',
    false,
    gerarUUID(),
    23,
    'Usuario-1',
)

const post2 = new NewPost(
    'images/post-2.jpg', 'Emerson Rodrigues',
    'O Belo Mundo dos Gatos',
    `Os gatos são criaturas enigmáticas que cativam a humanidade há milênios. Com sua graça, independência e personalidades únicas, eles conquistam o coração de milhões de pessoas ao redor do mundo. Seja você um amante dos felinos ou alguém que está considerando adotar um gatinho, este blog vai te guiar pelo fascinante mundo dos gatos, abordando desde o comportamento até os cuidados essenciais e curiosidades sobre esses adoráveis companheiros.

Comportamento dos Gatos: Entendendo Seu Amigo Felino
Os gatos têm uma reputação de serem independentes e, às vezes, distantes. No entanto, eles também podem ser incrivelmente afetuosos e leais aos seus donos. Cada gato tem sua própria personalidade, mas existem alguns comportamentos comuns que ajudam a entender melhor esses animais:

Ronronar: Geralmente, o ronronar é um sinal de que o gato está relaxado e contente. No entanto, os gatos também ronronam quando estão com dor ou desconforto, usando esse som como uma forma de se acalmar.

Amassar com as Patas: Quando um gato "amassa" você ou sua cama com as patas, ele está mostrando que se sente seguro e confortável. Este comportamento remonta aos tempos de filhote, quando os gatos amassavam a barriga da mãe para estimular a produção de leite.

Miar: O miado é a forma como os gatos se comunicam com os humanos. Cada gato tem seu próprio "vocabulário" de miados, que pode expressar desde fome até o desejo de brincar ou simplesmente pedir atenção.

Cuidados Essenciais com Gatos
Cuidar de um gato é relativamente simples, mas requer atenção a alguns aspectos importantes para garantir que ele viva uma vida longa e saudável:

Alimentação: Gatos precisam de uma dieta equilibrada e rica em proteínas. A alimentação deve ser adequada à idade, peso e condições de saúde do gato. Evite oferecer alimentos destinados a cães ou alimentos humanos que possam ser tóxicos para os gatos, como chocolate e cebola.

Higiene: Embora os gatos sejam notoriamente limpos e cuidem da própria higiene, é importante escová-los regularmente, especialmente se tiverem pelo longo, para evitar bolas de pelo. Além disso, mantenha a caixa de areia sempre limpa para garantir que o gato a use adequadamente.

Saúde: Visitas regulares ao veterinário são essenciais para manter a saúde do seu gato em dia. Vacinas, vermifugação e controle de pulgas e carrapatos devem estar em dia. Também é importante considerar a castração, que traz vários benefícios para a saúde e comportamento dos gatos.

Ambiente: Gatos adoram explorar, então é importante proporcionar um ambiente enriquecido. Arranhadores, brinquedos, e locais elevados para eles subirem ajudam a manter a mente e o corpo do gato ativos. Se possível, um espaço seguro ao ar livre, como um jardim ou uma varanda telada, pode ser um ótimo local para o gato explorar.

Curiosidades Sobre os Gatos
Visão Noturna: Gatos têm uma visão noturna excepcional. Eles podem ver em ambientes com pouca luz até seis vezes melhor que os humanos, graças à alta concentração de bastonetes em seus olhos.

Sentido de Orientação: Os gatos possuem um incrível senso de direção. Existem relatos de gatos que viajaram centenas de quilômetros para retornar aos seus lares. Embora o mecanismo exato não seja totalmente compreendido, acredita-se que eles usem pistas visuais, olfativas e até magnéticas para se orientar.

História Antiga: Os gatos foram venerados no antigo Egito, onde eram vistos como símbolos de graça e proteção. A deusa Bastet, representada com cabeça de gato, era a deusa da casa, do amor, da fertilidade e da proteção.

Gatos e Tecnologia: Muitos gatos hoje em dia se tornaram estrelas da internet, com milhões de seguidores em redes sociais e vídeos virais. Gatos como Grumpy Cat e Nyan Cat se tornaram ícones culturais, provando que esses animais continuam a fascinar e entreter pessoas de todas as idades.

Conclusão: A Magia de Ter um Gato em Casa
Ter um gato é uma experiência única e gratificante. Eles oferecem companhia, afeto e muitas risadas com suas travessuras. Com os cuidados certos e um ambiente amoroso, seu gato será um companheiro leal e encantador por muitos anos. Se você ainda não tem um gato, considere adotar um e descobrir por si mesmo a alegria de viver com esses incríveis animais! 🐱❤️
    `,
    {},
    '14/08/2024',
    ['gatos', 'cuidados', 'pets'],
    gerarUUID(),
)

const comentario2 = new Comentario(
    'imagens/user-icon-1.png',
    'Usuário-3',
    false,
    'Adorei o artigo! Muito informativo e bem explicado, especialmente para quem é apaixonado por gatos. As dicas de cuidados e curiosidades são realmente úteis. 🐾',
    {},
    '14/08/2024',
    false,
    gerarUUID(),
    7
)

const respostaParaComentario2 = new RespostaComentario(
    'imagens/user-icon-2.png',
    'Usuário-4',
    false,
    ':)',
    {},
    '14/08/2024',
    false,
    gerarUUID(),
    7,
    'Usuário-3'
)

post1.setComentario(comentarioPost1)
comentarioPost1.setComentario(respostaParaComentario1)

post2.setComentario(comentario2)
comentario2.setComentario(respostaParaComentario2)

SetPostBD.setPost(post1)
SetPostBD.setPost(post2)