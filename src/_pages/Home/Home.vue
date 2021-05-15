<template>
  <b-row class="skills-wrapper">
    <b-col
      class="skill-set-wrapper h-100"
      v-for="(skill, index) in skills"
      :lg="selected === index ? '7' : colSize"
      :key="index"
      @click="!selected !== index ? (selected = index) : null"
      :class="{ pointer: selected !== index }"
    >
      <div
        class="skill-set-background-mask"
        :class="{ hoverable: selected !== index }"
        :style="{
          background: `url(${getBackground(skill.background)})`,
        }"
      ></div>
      <skill-set
        :skill="skill"
        :selected="selected"
        :position="index"
        @select="selected = index"
        @modal="openModal"
      ></skill-set>
    </b-col>
    <b-col class="position-relative" hidden>
      <b-modal
        id="description-modal"
        :title="modal.title"
        hide-footer
        body-class="border-none"
        header-class="border-none"
        content-class="border-none"
      >
        <div class="modal-content" v-html="modal.content"></div>
      </b-modal>
    </b-col>
  </b-row>
</template>

<script>
import SkillSet from "./components/SkillSet.vue";
export default {
  name: "Home",
  components: { SkillSet },
  data() {
    return {
      selected: -1,
      modal: {
        content: "",
        title: "",
      },
      skills: [
        {
          title: "Self Presentation",
          little: "I am ...",
          description: `I'm Andre Mury, a software engineer graduated in Information Systems and currently Master's candidate by Federal University of Itajuba, Brazil. I have started 
          in this industry around 2014 when I joined the graduation, and I'm working as a freelancer since then. `,
          background: "atlantic-city.webp",
          abillities: [
            {
              name: "Team work",
              image: "teamwork.png",
              imageFilter: "invert(1)",
              level: 4,
              description: `I love teamworking. This is the best way to achieve our goals inside any workspace and either in life. it’s no coincidence that parrots have lifelong partners and wolves flock!
                To avoid being pretentious, the only issue I have about teams lives where members of it doesn't strive like everyone and the team becomes unbalanced.`,
            },
            {
              name: "Communication",
              image: "communication.png",
              level: 4,
              description: `Communication is one of the most important skills you can ever have. Peopole comunicate to each other in order to accomplish something and it is
              the only way we can move the world on. As a professional musician 🎸, I have learned very well how to communicate to others in order to deliver some mood or feeling.
              As a team worker and team leader I have developed the ability to deliver knowledge and confidence to my co-workers.`,
            },
            {
              name: "English",
              image: "language.png",
              imageFilter: "invert(1)",
              level: 3,
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
          ],
        },
        {
          title: "Back-end Engineer",
          little: "Backend",
          description: "",
          background: "backend.png",
          abillities: [
            {
              name: "PHP",
              image: "php.png",
              description: `5+ years working with vanilla PHP, writting websites and back-end APIs from scratch. 
              I have created myself a tool to improve my work efficiency by abstracting most boiler plates needed in a project.
              The reason I haven't really used a framework like Laravel, Slim, Laminas or Symfony is because I like to learn thinks from scratch.
              I have used some of these frameworks for experimenting but never in a real project. You can check my MMWS api template <a target="_blank" href="http://github.com/mury12/mm-ws">here</a> on GitHub.`,
              libs: [],
              level: 4.5,
            },
            {
              name: "NodeJS",
              image: "nodejs.png",
              description:
                "2 Years of experience working with NodeJS including more common back-end frameworks such as Express, Fastify and Sequelize.",
              libs: [],
              level: 3.5,
            },
            {
              name: "Typescript",
              image: "typescript.png",
              description: `I would consider my Typescript skills very much like JavaScript.
               I have been working with this technology since 2020 and have discovered a new life to the NodeJS platform that 
               I was very disappointed to use. MVC and other OOP implementations are possible with no difficulties and it makes me feel very trust about NodeJS Framework 😁`,
              libs: [],
              level: 3.5,
            },
            {
              name: "Docker",
              image: "docker.png",
              description:
                "1 year working with docker. I have got it a little later but I'm learning a lot and almost getting in touch with Swarm.",
              libs: [],
              level: 2.5,
            },
          ],
        },
        {
          title: "Front-end Engineer",
          little: "Frontend",
          description: "",
          background: "frontend.png",
          abillities: [],
        },
        {
          title: "Database Developer",
          little: "DBA",
          description: "",
          background: "database.png",
          abillities: [],
        },
        {
          title: "Musician",
          little: "Music",
          description: "",
          background: "findme.jpg",
          abillities: [],
        },
        {
          title: "Where you can find me",
          little: "Find me",
          description: "",
          background: "music.jpg",
          abillities: [],
        },
      ],
    };
  },
  methods: {
    openModal($e) {
      this.modal = $e;
      this.$bvModal.show("description-modal");
    },
    getBackground: function (img) {
      if (img) {
        return require(`@/assets/images/${img}`);
      }
      return "";
    },
  },
  computed: {
    colSize() {
      if (this.selected === -1) {
        return Number.parseInt(12 / this.skills.length);
      }
      return Number.parseInt((12 - 7) / (this.skills.length - 1));
    },
  },
};
</script>
<style scoped>
.skills-wrapper {
  height: 100vh;
}
.skill-set-wrapper {
  transform: skew(-5deg);
  transition: ease-in-out 600ms;
  box-sizing: border-box;
  border-right: 5px solid rgba(76, 76, 219, 0.425);
}
.skill-set-wrapper .skill-set {
  transform: skew(5deg);
}
.skill-set-wrapper:hover .hoverable {
  opacity: 0.3;
}
.skill-set-background-mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.1;
  filter: blur(6px);
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: top !important;
}
</style>