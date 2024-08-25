//Esse script serve apenas para crir a BD com seus getters e setters,
import { NewPost, Comentario, RespostaComentario, gerarUUID } from "./index/novoPost.js"
import { SetPostBD } from "./modules/BD.js"

const post4 = new NewPost(
    'images/post-1.jpg',
    'Emerson R.',
    'A Alegria dos Filhotes de Cães',
    `
    <p>Os filhotes de cães são verdadeiros pacotes de alegria que podem iluminar qualquer ambiente com suas travessuras e carinhos. Eles não só trazem um brilho nos olhos dos seus donos, mas também exigem cuidados especiais para garantir que cresçam saudáveis e felizes. Neste post, vamos compartilhar algumas dicas e informações valiosas para ajudá-lo a aproveitar ao máximo a companhia desses pequenos tesouros.</p>

    <h2>1. Criação de um Ambiente Aconchegante</h2>
    <p>Filhotes precisam de um espaço seguro e confortável para se sentirem protegidos. Prepare uma área tranquila com uma cama macia e brinquedos apropriados para a idade deles. Certifique-se de que a área esteja livre de perigos, como fios expostos e pequenos objetos que possam ser engolidos.</p>

    <h2>2. Nutrição Adequada</h2>
    <p>A alimentação é crucial para o desenvolvimento saudável dos filhotes. Escolha uma ração de alta qualidade específica para filhotes, que forneça os nutrientes essenciais para o crescimento. Evite dar alimentos para adultos, pois eles podem não atender às necessidades nutricionais dos filhotes.</p>

    <h2>3. Cuidados com a Saúde</h2>
    <p>Visitas regulares ao veterinário são fundamentais para garantir que os filhotes estejam saudáveis. Eles precisam de vacinas, vermifugação e exames de rotina. Além disso, é importante seguir as orientações do veterinário sobre a desparasitação e a prevenção de doenças.</p>

    <h2>4. Socialização e Treinamento</h2>
    <p>A socialização é essencial para que os filhotes se tornem cães equilibrados e bem ajustados. Exponha-os a diferentes pessoas, ambientes e outros animais de forma gradual e positiva. Comece o treinamento básico desde cedo, usando métodos de reforço positivo para ensiná-los comandos simples e boas maneiras.</p>

    <h2>5. Exercício e Brincadeiras</h2>
    <p>Filhotes têm muita energia e precisam de exercícios regulares para se manterem saudáveis e felizes. Brincadeiras como correr, buscar e explorar são ótimas para gastar energia e estimular a mente. Certifique-se de oferecer brinquedos adequados para a idade e o tamanho deles.</p>

    <h2>6. Amor e Atenção</h2>
    <p>Por fim, lembre-se de que os filhotes precisam de muito amor e atenção. Eles são muito sensíveis e formam fortes laços com seus donos. Dedique tempo para interagir com eles, mostrando carinho e afeto. Esse vínculo é essencial para seu bem-estar emocional e para o desenvolvimento de uma relação sólida e confiável.</p>

    <p>Os filhotes de cães são uma bênção e uma alegria para quem os recebe. Com cuidados adequados e muito amor, você garantirá que eles cresçam saudáveis e felizes, tornando-se companheiros leais e amorosos por toda a vida. Aproveite cada momento com esses pequenos amigos e desfrute das maravilhas que eles trazem para sua vida! 🐶💖</p>`,
    {},
    '12/08/2024',
    ['Filhotes', 'cachorros', 'dicas'],
    'P4b190d63-32cb-4807-a5ba-9b650d0953ce',
)



const post2 = new NewPost(
    'images/post-2.jpg', 
    'Emerson R.',
    'O Belo Mundo dos Gatos',
    `  <p>Os gatos são criaturas enigmáticas que cativam a humanidade há milênios. Com sua graça, independência e personalidades únicas, eles conquistam o coração de milhões de pessoas ao redor do mundo. Seja você um amante dos felinos ou alguém que está considerando adotar um gatinho, este blog vai te guiar pelo fascinante mundo dos gatos, abordando desde o comportamento até os cuidados essenciais e curiosidades sobre esses adoráveis companheiros.</p>

    <h2>Comportamento dos Gatos: Entendendo Seu Amigo Felino</h2>
    <p>Os gatos têm uma reputação de serem independentes e, às vezes, distantes. No entanto, eles também podem ser incrivelmente afetuosos e leais aos seus donos. Cada gato tem sua própria personalidade, mas existem alguns comportamentos comuns que ajudam a entender melhor esses animais:</p>
    <ul>
        <li><strong>Ronronar:</strong> Geralmente, o ronronar é um sinal de que o gato está relaxado e contente. No entanto, os gatos também ronronam quando estão com dor ou desconforto, usando esse som como uma forma de se acalmar.</li>
        <li><strong>Amassar com as Patas:</strong> Quando um gato "amassa" você ou sua cama com as patas, ele está mostrando que se sente seguro e confortável. Este comportamento remonta aos tempos de filhote, quando os gatos amassavam a barriga da mãe para estimular a produção de leite.</li>
        <li><strong>Miar:</strong> O miado é a forma como os gatos se comunicam com os humanos. Cada gato tem seu próprio "vocabulário" de miados, que pode expressar desde fome até o desejo de brincar ou simplesmente pedir atenção.</li>
    </ul>

    <h2>Cuidados Essenciais com Gatos</h2>
    <p>Cuidar de um gato é relativamente simples, mas requer atenção a alguns aspectos importantes para garantir que ele viva uma vida longa e saudável:</p>
    <ul>
        <li><strong>Alimentação:</strong> Gatos precisam de uma dieta equilibrada e rica em proteínas. A alimentação deve ser adequada à idade, peso e condições de saúde do gato. Evite oferecer alimentos destinados a cães ou alimentos humanos que possam ser tóxicos para os gatos, como chocolate e cebola.</li>
        <li><strong>Higiene:</strong> Embora os gatos sejam notoriamente limpos e cuidem da própria higiene, é importante escová-los regularmente, especialmente se tiverem pelo longo, para evitar bolas de pelo. Além disso, mantenha a caixa de areia sempre limpa para garantir que o gato a use adequadamente.</li>
        <li><strong>Saúde:</strong> Visitas regulares ao veterinário são essenciais para manter a saúde do seu gato em dia. Vacinas, vermifugação e controle de pulgas e carrapatos devem estar em dia. Também é importante considerar a castração, que traz vários benefícios para a saúde e comportamento dos gatos.</li>
        <li><strong>Ambiente:</strong> Gatos adoram explorar, então é importante proporcionar um ambiente enriquecido. Arranhadores, brinquedos e locais elevados para eles subirem ajudam a manter a mente e o corpo do gato ativos. Se possível, um espaço seguro ao ar livre, como um jardim ou uma varanda telada, pode ser um ótimo local para o gato explorar.</li>
    </ul>

    <h2>Curiosidades Sobre os Gatos</h2>
    <ul>
        <li><strong>Visão Noturna:</strong> Gatos têm uma visão noturna excepcional. Eles podem ver em ambientes com pouca luz até seis vezes melhor que os humanos, graças à alta concentração de bastonetes em seus olhos.</li>
        <li><strong>Sentido de Orientação:</strong> Os gatos possuem um incrível senso de direção. Existem relatos de gatos que viajaram centenas de quilômetros para retornar aos seus lares. Embora o mecanismo exato não seja totalmente compreendido, acredita-se que eles usem pistas visuais, olfativas e até magnéticas para se orientar.</li>
        <li><strong>História Antiga:</strong> Os gatos foram venerados no antigo Egito, onde eram vistos como símbolos de graça e proteção. A deusa Bastet, representada com cabeça de gato, era a deusa da casa, do amor, da fertilidade e da proteção.</li>
        <li><strong>Gatos e Tecnologia:</strong> Muitos gatos hoje em dia se tornaram estrelas da internet, com milhões de seguidores em redes sociais e vídeos virais. Gatos como Grumpy Cat e Nyan Cat se tornaram ícones culturais, provando que esses animais continuam a fascinar e entreter pessoas de todas as idades.</li>
    </ul>

    <h2>Conclusão: A Magia de Ter um Gato em Casa</h2>
    <p>Ter um gato é uma experiência única e gratificante. Eles oferecem companhia, afeto e muitas risadas com suas travessuras. Com os cuidados certos e um ambiente amoroso, seu gato será um companheiro leal e encantador por muitos anos. Se você ainda não tem um gato, considere adotar um e descobrir por si mesmo a alegria de viver com esses incríveis animais! 🐱❤️</p>
`,
    {},
    '14/08/2024',
    ['gatos', 'cuidados', 'pets'],
    'Pc9d78822-bf40-47a9-a772-1a0a725e9b9d',
)

const post3 = new NewPost(
    'images/post-3.jpg', 
    'Emerson R.',
    'Companheiros Fiéis e Encantadores',
    `<p>Quando se trata de escolher um animal de estimação, cães e gatos são os favoritos da maioria das pessoas. Ambos são companheiros maravilhosos, mas cada um tem suas características únicas que conquistam os corações de seus donos. Seja você um amante dos cães, dos gatos, ou dos dois, vamos explorar as particularidades e a magia que esses pets trazem para nossas vidas.</p>

        <h2>Cães: Lealdade e Alegria em Quatro Patas</h2>
        <p>Os cães são conhecidos por sua lealdade inabalável e sua capacidade de alegrar qualquer ambiente. Com diferentes raças e personalidades, há um cão perfeito para cada estilo de vida.</p>
        <ul>
            <li><strong>Lealdade e Companheirismo:</strong> Os cães formam laços profundos com seus donos e são conhecidos por sua devoção. Eles estão sempre prontos para nos acompanhar, seja em uma corrida no parque ou em um dia preguiçoso no sofá.</li>
            <li><strong>Energia e Brincadeiras:</strong> Cães adoram brincar! Seja jogando a bola, correndo ou aprendendo novos truques, eles são uma excelente companhia para atividades físicas e momentos divertidos.</li>
            <li><strong>Proteção e Cuidado:</strong> Além de serem ótimos companheiros, muitos cães são protetores naturais. Eles estão sempre atentos ao que acontece ao seu redor, garantindo a segurança de seus donos.</li>
        </ul>

        <h2>Gatos: Elegância e Mistério</h2>
        <p>Os gatos, por outro lado, são conhecidos por sua graça, independência e personalidades enigmáticas. Eles também têm um charme único que encanta seus donos.</p>
        <ul>
            <li><strong>Independência e Tranquilidade:</strong> Gatos são mais independentes e se adaptam bem a diferentes rotinas. Eles podem passar horas explorando a casa ou simplesmente relaxando em um canto aconchegante.</li>
            <li><strong>Personalidade Única:</strong> Cada gato tem sua própria personalidade. Alguns são mais afetuosos e gostam de estar perto de seus donos, enquanto outros preferem um pouco mais de espaço. Mas uma coisa é certa: todos têm seu jeito especial de mostrar carinho.</li>
            <li><strong>Curiosidade e Aventura:</strong> Gatos são naturalmente curiosos. Eles adoram explorar, subir em lugares altos e brincar com objetos inusitados. Essa curiosidade traz muita diversão e entretenimento para a casa.</li>
        </ul>

        <h2>Cuidando dos Seus Pets</h2>
        <p>Independente de você ter um cão, um gato ou ambos, cuidar desses amigos peludos requer atenção e dedicação.</p>
        <ul>
            <li><strong>Alimentação Adequada:</strong> Oferecer uma dieta balanceada e apropriada para cada espécie é fundamental. Cães e gatos têm necessidades nutricionais diferentes que devem ser respeitadas para garantir sua saúde.</li>
            <li><strong>Cuidados com a Saúde:</strong> Visitas regulares ao veterinário, vacinação e prevenção de parasitas são essenciais para manter seu pet saudável.</li>
            <li><strong>Amor e Atenção:</strong> Tanto cães quanto gatos precisam de amor e atenção. Interagir com eles, brincar e proporcionar um ambiente seguro e confortável são partes essenciais do cuidado.</li>
        </ul>

        <h2>Conclusão</h2>
        <p>Cães e gatos são mais do que apenas animais de estimação; eles são membros da família que trazem alegria, amor e companhia. Cada um com suas peculiaridades, eles nos ensinam sobre lealdade, amizade e o valor de uma conexão verdadeira. Se você já tem um pet, aproveite cada momento ao lado dele. Se está pensando em adotar, esteja pronto para uma experiência cheia de amor e aventura!</p>
    `,
    {},
    '25/08/2024',
    ['gatos', 'cuidados','caes', 'pets', 'curiosidades'],
    'Pv9d78822-bf40-47a9-a772-140a725e9b9d',
);

const post1 = new NewPost(
    'images/post-4.jpg',
    'Emerson R.',
    'Como surgiram os cães domésticos',
    `
    <p>
        Os cães são conhecidos como os melhores amigos do homem, mas você já se perguntou como eles se tornaram nossos companheiros fiéis? A história dos cães domésticos é fascinante e remonta a milhares de anos, envolvendo uma longa jornada de evolução, convivência e cooperação entre humanos e lobos.
    </p>

    <h2>Origem dos Cães: A Descendência dos Lobos</h2>
    <p>
        Os cães domésticos (<i>Canis lupus familiaris</i>) descendem diretamente dos lobos cinzentos (<i>Canis lupus</i>). Estudos genéticos indicam que a domesticação dos cães começou entre 20.000 e 40.000 anos atrás, durante o período Paleolítico, quando os primeiros humanos ainda eram caçadores-coletores.
    </p>
    <p>
        Embora não se saiba ao certo como essa domesticação ocorreu, acredita-se que os lobos se aproximaram dos acampamentos humanos atraídos por restos de comida. Os lobos que eram menos agressivos e mais sociáveis se beneficiavam dessa proximidade, recebendo alimento e proteção. Com o tempo, esses lobos começaram a viver mais próximos dos humanos, e as gerações subsequentes evoluíram para se tornarem os primeiros cães domesticados.
    </p>

    <h2>A Convivência e a Evolução dos Cães</h2>
    <p>
        A convivência entre humanos e cães trouxe benefícios mútuos. Os cães ajudavam na caça, protegiam os acampamentos contra predadores e intrusos, além de se tornarem companheiros leais. Em troca, os humanos forneciam alimento, abrigo e cuidado. Essa relação de cooperação moldou não apenas o comportamento dos cães, mas também suas características físicas.
    </p>
    <p>
        Ao longo dos milênios, os seres humanos começaram a selecionar cães com características específicas, como tamanho, temperamento e habilidades. Esse processo de seleção artificial levou ao surgimento das diferentes raças de cães que conhecemos hoje, cada uma com suas próprias peculiaridades e funções, desde pastoreio até companhia.
    </p>

    <h2>A Transição para a Vida Doméstica</h2>
    <p>
        Com o tempo, os cães deixaram de ser apenas aliados na caça e na proteção para se tornarem membros da família. A transição para a vida doméstica foi um processo gradual, mas os cães rapidamente se adaptaram ao papel de companheiros próximos dos humanos. Eles aprenderam a entender nossas emoções, nossos gestos e até mesmo nossa linguagem, criando um vínculo profundo e único entre as duas espécies.
    </p>
    <p>
        Hoje, os cães são mais do que apenas animais de estimação. Eles são parte integrante da vida de milhões de pessoas ao redor do mundo, oferecendo amor incondicional, companhia e alegria. A longa jornada que começou com os lobos selvagens evoluiu para a relação especial que conhecemos hoje, fazendo dos cães nossos verdadeiros amigos de todas as horas.
    </p>

    <h2>Conclusão</h2>
    <p>
        A história dos cães domésticos é um testemunho do poder da amizade entre espécies. Desde os primeiros encontros entre lobos e humanos até a variedade de raças que vemos hoje, os cães têm sido nossos aliados, protetores e companheiros. Eles evoluíram ao nosso lado, adaptando-se às nossas necessidades e nos ensinando o verdadeiro significado da lealdade e do amor. Ter um cão é, sem dúvida, uma das maiores bênçãos da vida, e a história de como eles se tornaram nossos amigos é tão fascinante quanto a própria relação que compartilhamos com eles.
    </p>`,
    {},
    '25/08/2024',
    ['caes', 'pets', 'curiosidades', 'historia'],
    'Pu9d78822-bf40-47a4-a772-140a725e9b9d',
);

const post5 = new NewPost(
    'images/post-2.jpg',
    'Emerson R.',
    'Cuidados com os Pelos de um Gato: Dicas para Mantê-los Saudáveis e Bonitos',
    `<p>
        Os gatos são conhecidos por sua beleza, e um dos principais atributos que contribuem para essa imagem são seus pelos. Cuidar bem do pelo de um gato não é apenas uma questão estética, mas também de saúde. Um pelo saudável reflete um gato saudável, por isso, é essencial adotar alguns cuidados regulares para garantir que o seu felino esteja sempre com uma pelagem brilhante e sem problemas.
    </p>

    <h2>1. Escovação Regular</h2>
    <p>
        Escovar o pelo do seu gato é uma das melhores formas de manter sua pelagem saudável. A escovação ajuda a remover pelos mortos, evitando a formação de bolas de pelo que podem causar desconforto e até problemas de saúde. Gatos de pelo longo, como Persas e Maine Coons, devem ser escovados diariamente, enquanto gatos de pelo curto podem ser escovados algumas vezes por semana.
    </p>

    <h2>2. Alimentação Adequada</h2>
    <p>
        A saúde da pelagem de um gato está diretamente ligada à sua alimentação. Certifique-se de que o seu gato consuma uma dieta balanceada, rica em proteínas e ácidos graxos essenciais, como ômega-3 e ômega-6. Esses nutrientes são fundamentais para manter o pelo macio e brilhante.
    </p>

    <h2>3. Banhos Ocasionalmente</h2>
    <p>
        Ao contrário dos cães, os gatos não precisam de banhos frequentes. Eles são animais naturalmente limpos e se lavam sozinhos. No entanto, banhos ocasionais podem ser necessários, especialmente se o gato estiver muito sujo ou tiver uma condição de pele que requeira tratamento específico. Use sempre um shampoo específico para gatos e seque-o bem após o banho.
    </p>

    <h2>4. Cuidados com Parasitas</h2>
    <p>
        Pulgas, carrapatos e outros parasitas são inimigos da saúde da pele e do pelo do gato. Certifique-se de manter o tratamento antiparasitário em dia, conforme orientação do veterinário. A prevenção é a melhor forma de evitar problemas como dermatites e queda excessiva de pelo.
    </p>

    <h2>5. Visitas Regulares ao Veterinário</h2>
    <p>
        Consultas regulares ao veterinário são essenciais para monitorar a saúde do seu gato. Problemas como alergias, deficiências nutricionais e outras condições de saúde podem afetar diretamente a pelagem. O veterinário pode identificar qualquer problema precocemente e recomendar o melhor tratamento.
    </p>

    <h2>Conclusão</h2>
    <p>
        Manter o pelo do seu gato bonito e saudável requer um pouco de atenção e cuidados regulares. Com escovação frequente, uma boa alimentação e visitas ao veterinário, você garantirá que seu gato esteja sempre com uma pelagem brilhante e sem problemas. Esses cuidados não só melhoram a aparência do seu felino, mas também contribuem para seu bem-estar geral. Afinal, um gato com pelo saudável é um gato feliz!
    </p>
    `,
    {},
    '25/08/2024',
    ['gatos', 'pets', 'curiosidades', 'cuidados'],
    'Pl9d78g22-bf40-47a4-a732-140a725e9b9d',
)

SetPostBD.setPost(post1)
SetPostBD.setPost(post2)
SetPostBD.setPost(post3)
SetPostBD.setPost(post4)
SetPostBD.setPost(post5)