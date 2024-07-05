export default [
  {
    title: "Self Presentation",
    little: "I am ...",
    description: `<p>I'm Andre Mury, a systems analyst graduated in Information Systems by Federal University of Itajuba, Brazil. I have started 
      in this industry around 2014 when I joined the graduation, and I'm working as a freelancer since then. In the meantime I have worked in some small companies and startups as a developer
      and always brought something good.</p>
      <p>I have developed this digital resumé in order to facilitate an overview of my professional abilities and I hope you feel good with this view :) Thank you for visiting.</p>
      <h5 class="mt-4">Please check <a target="_blank" href="https://linkedin.com/in/andremury">Linkedin</a> for professional information.</h5>
      `,
    background: "",
    abilities: [
      {
        name: "Team work",
        image: "teamwork.png",
        imageFilter: "invert(1)",
        level: 4,
        description: `I love teamwork. This is the best way to achieve our goals inside any workspace and either in life. it’s no coincidence that parrots have lifelong partners and wolves flock!
            To avoid being pretentious, the only issue I have about teams lives where members of it don't strive like everyone and the team becomes unbalanced.`,
      },
      {
        name: "Communication",
        image: "communication.png",
        level: 4,
        description: `Communication is one of the most important skills you can ever have. People communicate with each other in order to accomplish something and it is
          the only way we can move the world on. As a professional musician 🎸, I have learned very well how to communicate to others in order to deliver some mood or feeling.
          As a team worker and team leader, I have developed the ability to deliver knowledge and confidence to my co-workers.`,
      },
      {
        name: "Dedicated",
        image: "dedication.png",
        imageFilter: "invert(1)",
        level: 4.5,
        description:
          "If I do believe in the cause, you can count on me till the end.",
      },
      {
        name: "English",
        image: "language.png",
        imageFilter: "invert(1)",
        level: 4,
        description:
          "Very good listening, good writing and medium speaking. I am trying to improve this skill the best I can :)",
      },
      {
        name: "Portuguese",
        image: "language.png",
        imageFilter: "invert(1)",
        level: 5,
        description:
          "Well, I'm a native speaker so I have no problem speaking portuguese.",
      },
      {
        name: "Sincerity",
        image: "sincerity.png",
        imageFilter: "invert(1)",
        level: 4.5,
        description: "I'm very sincere..",
      },
      {
        name: "Funny",
        image: "funny.png",
        imageFilter: "invert(1)",
        level: 4.5,
        description: "And also very funny :D",
      },
      {
        name: "Methodical",
        image: "methodical.png",
        imageFilter: "invert(1) brightness(2)",
        level: 4.5,
        description:
          "Step by step. If protocols exists why should we do the wrong way?",
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
    description: `I have made my choices about back-end development a long time ago. PHP inserted me into this world and I've dedicated time learning it, and doing my best to keep the good pratices.
        As the time passes, I have learned other technologies such as NodeJS and Docker to improve my skills. In the PHP case, I always preferred to work with the vanilla version, without a huge
        framework behind the project and I ended creating my own API environment model that helped me in almost all my small and medium size projects. Now I have decided to learn a framework
        and made my choice for Symfony. I have tried Laravel but it is too big for most projects and Zend/Laminas are in my TODO list. For now, let's focus on Symfony.`,
    background: "",
    abilities: [
      {
        name: "PHP",
        image: "php.png",
        description: `<p>Several years working with vanilla PHP, writting websites and back-end APIs from scratch. 
          I have created myself a tool to improve my work efficiency by abstracting most boilerplates needed in a project.
          </p><p>The reason I haven't really used a framework like Laravel, Slim, Laminas, or Symfony is that I like to learn things from scratch.
          I have used some of these frameworks for experimenting but never in a big project. 
          You can check a my api template tool <a target="_blank" href="http://github.com/mury12/mm-ws">here</a> on GitHub.</p>`,
        libs: [],
        level: 4.5,
      },
      {
        name: "MariaDB/MySQL",
        image: "database.png",
        description: `Relational databases are something that I particularly like. It seems like a totally different part of the project that involves a lot of effort.
                 I'm experienced from database modeling to administration and optimization.
                 My best knowledge is about MariaDB/MySQL but I also have had a few experiences with SQL Server and HannaDB (SAP).`,
        libs: [],
        level: 4,
      },
      {
        name: "NodeJS",
        image: "nodejs.png",
        description:
          "I Work with NodeJS since 2020, including more common back-end frameworks such as Express, Fastify, CryptoJS and Sequelize.",
        libs: [],
        level: 4,
      },
      {
        name: "Typescript",
        image: "typescript.png",
        description: `I would consider my Typescript skills very much like JavaScript.
           I have been working with this technology since 2020 and have discovered a new life to the NodeJS platform that 
           I was very disappointed using it. MVC and other OOP implementations are possible with no difficulties and it makes me feel very trust about NodeJS Framework 😁`,
        libs: [],
        level: 4.5,
      },
      {
        name: "MongoDB",
        image: "mongodb.png",
        description: `MongoDB is my main activity-log database. I really only use it as a giant notepad but I still know how to handle it.
                Normally I like to use NodeJS backend to communicate because it is easier but I have also developed PHP backends alongside MongoDB.`,
        libs: [],
        level: 2,
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
    description: "",
    background: "",
    abilities: [
      {
        name: "Nuxt 2 & 3",
        image: "nuxt.png",
        description: `<p>I have replaced my main stack Vue+Webpack by Nuxt+Vite because of several improvements NuxtJS can make to a project, from auto importing to SSR and smart processing. 
          I still use vanilla vue for simple projects like this website but most of my newer projects are Nuxt3-based.</p>`,
        libs: [],
        level: 4,
      },
      {
        name: "VueJS 3",
        image: "logo.png",
        description: `<p>It took a little time for me to migrate to Vue3 because of legacy, library compatibility and maintaned projects but first time I tried, I took the decision
        to completely migrate. It's so fun to work! When they released it, I thought it got too close from React too much (and this upsets me :/) but after really implementing a project I realized that Vue hasn't lost its roots yet :)</p>`,
        libs: [],
        level: 4,
      },
      {
        name: "VueJS 2",
        image: "logo.png",
        description: `<p>I have been working with VueJS since 2018 and I fell in love as soon as I met this framework, and since then I'm learning and using Vue in most projects as I can. </p>
                <p>I usually use the most common VueJS packages such as BootstrapVue, VueTheMask, VueRouter, VueSession, VueX, Nuxt and others that come as it is needed.</p>`,
        libs: [],
        level: 4.5,
      },
      {
        name: "Bootstrap",
        image: "bootstrap.png",
        description: `The Bootstrap Framework is the most overused framework for web development. I've chosen this framework since version 2 instead of Material or any other because of its flexibility. 
                    It is really easy to create and modify components. Although, Bootstrap classes are very useful overall the project.`,
        libs: [],
        level: 4.5,
      },
      {
        name: "JavaScript",
        image: "js.png",
        description: `I have started using JavaScript a little after PHP, between 2013 and 2014. In the beginning, I wasn't really sure to be a front-end developer and only used JS for those things
                    I couldn't do with css or static html. But time passes and I have developed a passion for front-end development so I started to learn JavaScript and, of course, the father of all jQuery.
                    Today, JavaScript is part of my all-day development for both front-end and backend.`,
        libs: [],
        level: 4,
      },
      {
        name: "jQuery",
        image: "jquery.png",
        description: `jQuery was the first JS lib I have ever used and it was very, very useful. In early 2010's, there weren't much more than the hyped jQuery and its Ajax requests. It was beautiful.
                    But then, another frameworks came and jQuery is being ignored :/. I still consider to use it for non-reactive development.`,
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
          "I have been using react and NextJS as a market-option since 2020. I should say that this is far from being my favorite -- or a reliable lib, but I have a good knowledge and autonomy in this tool.",
        libs: [],
        level: 3.5,
      },
    ],
  },
  {
    title: "General Tools and Frameworks",
    little: "Other tools",
    description: "",
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
    title: "Where you can find me",
    little: "Find me",
    description: `
        <p>You can find me in:</p>
        <ul class="m-0 p-0" style="list-style-type: none">
        <li><a target="_blank" href="https://www.linkedin.com/in/andremury">Linkedin</a></li>
        <li><a target="_blank" href="https://andremury.com">Musician webpage</a></li>
        <li><a target="_blank" href="https://dollarsoundtrack.com">Dollar Soundtrack</a></li>
        <li><a target="_blank" href="https://github.com/mury12">Github (Personal/Portfolio Account)</a></li>
        <li><a target="_blank" href="https://github.com/andremury">Github (Work Account)</a></li>
        <li><a target="_blank" href="https://gitlab.com/mury12">Gitlab</a></li>
        <li><a target="_blank" href="https://open.spotify.com/artist/5aw5ZuQB4ElCVsrPkSvtLn?si=d747c21cd41b463b">Spotify</a></li>
        <li><a target="_blank" href="https://soundcloud.com/andremury">Soundcloud</a></li>
        <li><a target="_blank" href="https://instagram.com/andmury.music">Instagram</a></li>
        </ul>
        And you can also <a href ="mailto:mury63@gmail.com">mail me</a><br/>
        Thanks for your visit.
        `,
    background: "",
    abilities: [],
  },
];
