export default [
  {
    title: "Apresentação",
    little: "Eu sou ...",
    description: `<p>Olá, eu sou André Mury, Analista de Sistemas graduado em Sistemas de Informação pela Universidade Federal de Itajubá e, atualmente, Engenheiro de Software na 
        <a href="https://karmahq.xyz" target="_blank">Karma</a>.</p> 
        <p>Eu iniciei nessa indústria de desenvolvimento de software por volta de 2014, ano em ingressei na universidade. Embora já tivesse construido alguns sites e sistemas simples desde 2007,
        considero 2014 meu headstart. Em 2015 eu comecei a trabalhar como desenvolvedor freelancer, área a qual atuo até os dias de hoje e, no meio tempo, trabalhei em algumas pequenas empresas
        e startups.</p>
        <h5 class="mt-4">Visite meu <fas icon="linkedin-in" /><a target="_blank" href="https://linkedin.com/in/andremury">Linkedin</a> para mais informações.</h5>
        `,
    background: "",
    abilities: [
      {
        name: "Trabalho em Equipe",
        image: "teamwork.png",
        imageFilter: "invert(1)",
        level: 4,
        description: `Trabalho em equipe é a melhor forma que temos de alcançar nossos objetivos. Não é à toa que lobos se juntam em bandos. Para evitar uma imagem pretenciosa, 
                meu único problema com times é quando há desbalanceamento de responsabilidade.`,
      },
      {
        name: "Comunicação",
        image: "communication.png",
        level: 4,
        description: `Comunicação é uma das mais importantes habilidades que se deve ter. As pessoas comunicam-se umas com as outras para que possam entrar em consenso e 
                atingir um objetivo, assim como a natureza também se comunica em suas caçadas e esta é a única forma que podemos utilizar para mover as coisas.
                Como músico profissional 🎸, eu aprendi -- e venho aprendendo, como me comunicar com as pessoas para entregar um sentimento ou humor e como líder e participante de equipes
                eu aprendi a levar confiança e conhecimento para meus companheiros.`,
      },
      {
        name: "Dedicação",
        image: "dedication.png",
        imageFilter: "invert(1)",
        level: 4.5,
        description: "Se eu acreditar na causa, com certeza irei até ao final.",
      },
      {
        name: "Inglês",
        image: "language.png",
        imageFilter: "invert(1)",
        level: 3,
        description:
          "Mantenho uma conversa técnica ou informal sem muitos problemas.",
      },
      {
        name: "Português",
        image: "language.png",
        imageFilter: "invert(1)",
        level: 5,
        description: "Este é meu idioma nativo :)",
      },
      {
        name: "Sinceridade",
        image: "sincerity.png",
        imageFilter: "invert(1)",
        level: 4.5,
        description: "Costumo ser muito sincero, às vezes até demais.",
      },
      {
        name: "Divertido",
        image: "funny.png",
        imageFilter: "invert(1)",
        level: 4.5,
        description: "Mas também sei fazer a festa :D 🎉",
      },
      {
        name: "Metódico",
        image: "methodical.png",
        imageFilter: "invert(1) brightness(2)",
        level: 4.5,
        description:
          "Passo a passo. Certas coisas não podemos simplesmente pular etapas.",
      },
    ],
  },
  {
    title: "",
    little: "",
    description: "",
    background: "findme.jpg",
    abilities: [],
  },
  {
    title: "Back-end Engineer",
    little: "Back end",
    description: `Eu fiz minhas escolhas para esta stack há muito tempo. PHP me inseriu neste meio, portanto, dediquei a maioria dos anos à sua utilização e estudo, tentando sempre
        manter as boas práticas. Com o passar do tempo, eu aprendi outras tecnologias como NodeJS e Docker para melhorar o desempenho e, no caso do PHP, sempre preferi trabalhar com a versão
        "vanilla", sem um enorme framework por trás dos projetos. Ao final eu acabei desenvolvendo um micro ambiente de desenvolvimento de API que me ajuda na maioria dos pequenos e médios
        projetos. Hoje, eu decidi por aprender um Framework e fiz minha escolha pelo Symfony, Eu tentei o Laravel, mas é muito pesado para a maioria dos projetos e com certeza Zed/Laminas 
        está na minha lista. Por agora, vamos focar no Symfony.`,
    background: "",
    abilities: [
      {
        name: "PHP",
        image: "php.png",
        description: `<p>Desde 2015 trabalhando com vanilla PHP, construindo websites e APIs do completo zero. Eu acabei criando por mim mesmo
                uma ferramenta para aumentar a eficiência do meu trabalho, abstraindo a maioria das coisas repetitivas que precisamos fazer em um projeto, como por exemplo
                criar CRUDs.</p><p>A razão de eu não ter utilizado um framework durante este tempo todo é pelo fato de que eu gosto de entender como as coisas funcionam
                em seu núcleo e, para isso é preciso desenvolver desde o nível mais baixo. Você pode checar a minha ferramenta no 
                <a target="_blank" href="http://github.com/mury12/mm-ws">GitHub</a>.</p>`,
        libs: [],
        level: 4.5,
      },
      {
        name: "MariaDB/MySQL",
        image: "database.png",
        description: `Bancos de dados relacionais são uma coisa que eu particularmente gosto. Parece uma parte completamente diferente do projeto que envolve um grante esforço.
                Tenho experiência em modelagem de banco de dados, administração e otimização de consulta. Meu domínio é MySQL/MariaDB, mas também tenho alguma experiência com SQLServer e HannaDB(SAP).`,
        libs: [],
        level: 4,
      },
      {
        name: "NodeJS",
        image: "nodejs.png",
        description:
          "Trabalho com NodeJS desde 2020, incluindo as bibliotecas mais comuns, como ExpressJS, Fastify, CryptoJS, JWT e Sequelize.",
        libs: [],
        level: 4,
      },
      {
        name: "Typescript",
        image: "typescript.png",
        description: `Eu considero minha experiência com Typescript muito parecida com a de Javascript. Eu venho trabalhando com esta tecnologia desde 2020
                e descobri uma nova vida para o NodeJS, uma plataforma que eu me decepcionei bastante no passado pela falta de estrutura e o resultado bagunçado.
                Com TypeScript, o MVC torna-se possível junto ao JS e acabei por ficar bem confiante com o framework 😁`,
        libs: [],
        level: 4.5,
      },
      {
        name: "MongoDB",
        image: "mongodb.png",
        description: `MongoDB é meu principal banco de dados para armazenamento de logs. Eu realmente o uso como um grande bloco de notas, mas ainda assim
                entendo um um pouco do seu funcionamento. Normalmente, eu utilizo NodeJS como microserviço de comunicação por ser mais simples, mas também já
                implementei aplicações com PHP e MongoDB.`,
        libs: [],
        level: 3,
      },
      {
        name: "Docker",
        image: "docker.png",
        libs: [],
        level: 2,
      },
    ],
  },
  {
    title: "Front-end Engineer",
    little: "Front end",
    description:
      "Caindo de pára-quedas, o front-end acabou fazendo parte de toda a trajetória que eu pude fazer até este momento.",
    background: "",
    abilities: [
      {
        name: "Nuxt 2 & 3",
        image: "nuxt.png",
        description: `<p>Substituí minha stack principal Vue+Webpack por Nuxt+Vite por causa de várias melhorias que o NuxtJS pode fazer em um projeto, desde a importação automática até SSR e processamento inteligente.
          Eu ainda utilizo Vue vanilla para projetos simples como este site (que ainda será migrado para Vue3), mas a maioria dos meus projetos mais recentes são baseados em Nuxt3.</p>`,
        libs: [],
        level: 4,
      },
      {
        name: "VueJS 3",
        image: "logo.png",
        description: `<p>Demorei um pouco para migrar para o Vue3 por causa do legado, compatibilidade de bibliotecas e projetos mantidos, mas na primeira vez que utilizei, tomei a decisão
        de migrar completamente. É tão divertido trabalhar! Quando lançaram, achei que se aproximava demais do React (e isso me chateia :/), mas depois de realmente implementar 
        um projeto, percebi que o Vue ainda não perdeu suas raízes :)</p>`,
        libs: [],
        level: 4,
      },
      {
        name: "VueJS 2",
        image: "logo.png",
        description: `<p>Eu tenho trabalhado com VueJS desde 2018, quando o conheci. Admito que me apaixonei por esse framework e desde então, eu tenho estudado e utilizado em praticamente
        todos os projetos.</p>
        <p>Tenho autonomia nas mais comuns bibliotecas VueJS, como BootstrapVue, VueTheMask, VueSession, VueRouter, VueX, Nuxt e outras que vêm com a necessidade.</p>`,
        libs: [],
        level: 4.5,
      },
      {
        name: "Bootstrap",
        image: "bootstrap.png",
        description: `O Bootstrap é o maior framework de front-end atualmente para web. Eu escolhi este gigante desde a versão 2, pois, ao invés do Material ou outros, por causa da flexibilidade.
                    É muito simples utilizar as classes, criar novos componentes ou modificar o próprio framework.`,
        libs: [],
        level: 4.5,
      },
      {
        name: "JavaScript",
        image: "js.png",
        description: `Eu comecei com JavaScript um pouco depois do PHP, naturalmente. No início eu não era muito interessado em desenvolvimento front-end, só queria ver as coisas funcionarem, então
        utilizava o JS para realizar coisas que eu não conseguia fazer com CSS. O tempo passou e eu acabei por me tornar um desenvolvedor front-end que usa JavaScript o tempo todo.
        No início, todos começamos com o PAI DE TODOS jQuery. Infelizmente o tempo passa e este magnífico framework está sendo esquecido aos poucos.`,
        libs: [],
        level: 4,
      },
      {
        name: "jQuery",
        image: "jquery.png",
        description: `jQuery foi a primeira biblioteca de JavaScript que eu havia usado. No começo da década de 2010, era inacreditável o que essa belezinha nos proporcionava com Ajax, animações e 
                    diversas outras abstrações. Era maravilhoso.`,
        libs: [],
        level: 3,
      },
      {
        name: "HTML5",
        image: "html5.png",
        libs: [],
        level: 3.5,
      },
      {
        name: "CSS3",
        image: "css3.png",
        libs: [],
        level: 3.5,
      },
      {
        name: "Sass",
        image: "sass.png",
        libs: [],
        level: 3.5,
      },
      {
        name: "React/NextJS",
        image: "react.svg",
        description:
          "Tenho trabalhado com ReactJS/Nextjs como opção de mercado desde 2020. Apesar de estar longe de ser meu framework favorito -- ou um framework produtivo, tenho uma boa autonomia e conhecimentos para realizar as tarefas necessárias.",
        libs: [],
        level: 3.5,
      },
    ],
  },
  {
    title: "Outras Ferramentas e Frameworks",
    little: "Outras Ferramentas",
    description:
      "Separo esta seção para expor outras ferramentas que eu utilizo em meu dia-a-dia, seja para programação, design ou planejamento.",
    background: "",
    abilities: [
      {
        name: "Linux",
        image: "linux.png",
        libs: [],
        level: 3.5,
      },
      {
        name: "Wordpress",
        image: "wordpress.png",
        libs: [],
        level: 4,
      },
      {
        name: "Woocommerce",
        image: "woocom.png",
        imageFilter: "",
        libs: [],
        level: 3,
      },
      {
        name: "Botpress",
        image: "botpress.png",
        libs: [],
        level: 2,
      },
      {
        name: "Solidity",
        image: "solidity.png",
        imageFilter: "invert(1)",
        libs: [],
        level: 2,
      },
      {
        name: "Java",
        image: "java.webp",
        libs: [],
        level: 3,
      },
      {
        name: "Trello",
        image: "trello.png",
        libs: [],
        level: 3.5,
      },
      {
        name: "Scrum",
        image: "scrum.png",
        libs: [],
        level: 2.5,
      },
      {
        name: "Arduino",
        image: "arduino.png",
        libs: [],
        level: 2,
      },
      {
        name: "C",
        image: "c.png",
        libs: [],
        level: 2.5,
      },
      {
        name: "C#",
        image: "csharp.png",
        libs: [],
        level: 2,
      },
      {
        name: "Python",
        image: "python.png",
        libs: [],
        level: 2,
      },
      {
        name: "Unity3d",
        image: "unity.webp",
        libs: [],
        level: 2,
      },
      {
        name: "Ms Office",
        image: "msoffice.png",
        libs: [],
        level: 4,
      },
      {
        name: "Open Office",
        image: "openoffice.png",
        libs: [],
        level: 4,
      },
      {
        name: "Photoshop",
        image: "photoshop.png",
        libs: [],
        level: 3.5,
      },
      {
        name: "After FX",
        image: "afterfx.png",
        libs: [],
        level: 2.5,
      },
      {
        name: "Premiere",
        image: "premiere.png",
        libs: [],
        level: 3,
      },
    ],
  },
  {
    title: "Onde me encontrar?",
    little: "Ache-me",
    description: `
        <p>Você pode me encontrar em:</p>
        <ul class="m-0 p-0" style="list-style-type: none">
        <li><a target="_blank" href="https://www.linkedin.com/in/andremury">Linkedin</a></li>
        <li><a target="_blank" href="https://github.com/mury12">Github (Perfil Pessoal/Portfolio)</a></li>
        <li><a target="_blank" href="https://github.com/andremury">Github (Perfil de Trabalho)</a></li>
        <li><a target="_blank" href="https://open.spotify.com/artist/5aw5ZuQB4ElCVsrPkSvtLn?si=d747c21cd41b463b">Spotify</a></li>
        <li><a target="_blank" href="https://soundcloud.com/andremury">Soundcloud</a></li>
        </ul>
        Você também pode me <a href ="mailto:mury63@gmail.com">enviar um e-mail</a><br/>
        Obrigado pela sua visita!
        `,
    background: "",
    abilities: [],
  },
];
