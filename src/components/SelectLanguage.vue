<template>
  <div>
    <div
      class="
        position-absolute
        w-100
        h-100
        d-flex
        flex-column
        justify-content-center
      "
    >
      <h2>Welcome! Please, select a language</h2>
      <h5 class="text-secondary">Bem vindo! Por favor, selecione um idioma</h5>
      <div class="mt-3 d-md-flex m-auto m-md-0 justify-content-center">
        <div
          ref="lang-en"
          class="
            pointer
            langselector-btn
            d-flex
            align-items-center
            my-2
            justify-content-center
          "
          @click="select('en')"
        >
          English
        </div>
        <div
          ref="lang-pt"
          class="
            pointer
            langselector-btn
            d-flex
            align-items-center
            my-2
            justify-content-center
          "
          @click="select('pt')"
        >
          Português
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectLanguage",
  methods: {
    select: function (lang, ttl = 3000) {
      if (this.$refs["lang-en"] && this.$refs["lang-pt"]) {
        if (lang === "en") {
          this.$refs["lang-en"].className += " selected ";
          this.$refs["lang-pt"].className += " unselected ";
        } else if (lang === "pt") {
          this.$refs["lang-en"].className += " unselected ";
          this.$refs["lang-pt"].className += " selected ";
        }
      }
      document.removeEventListener("keyup", this.listener);

      setTimeout(() => {
        this.$emit("select", lang);
      }, ttl);
    },
    listener: function (e) {
      if (e.key === "1") {
        this.select("en");
      } else if (e.key === "2") {
        this.select("pt");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      const lang = this.$session.get("lang");
      if (lang && ["en", "pt"].includes(lang)) this.select(lang, 0);
      document.addEventListener("keyup", this.listener);
    });
  },
};
</script>

<style>
.langselector-btn:nth-of-type(2n + 1).unselected {
  transition: 1s;
  opacity: 0;
  transform: rotate(-20deg);
  margin-left: -315px;
}
.langselector-btn:nth-of-type(2n).unselected {
  transition: 1s;
  opacity: 0;
  transform: rotate(20deg);
  margin-right: -315px;
}

.langselector-btn.selected {
  transition: 1s;
  transition-delay: 0.8s;
  transform: scale(2);
  background-color: black;
}
</style>
