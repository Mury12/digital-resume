<template>
  <b-col md="6" lg="4" class="ability-wrapper p-3">
    <b-row
      class="ability-content default-transition m-2 h-100 pt-5 rounded"
      :class="{ pointer: extendDescription }"
      @click="openDescription"
    >
      <b-col cols="12">
        <p class="h4">{{ ability.name }}</p>
      </b-col>
      <b-col class="text-center" style="height: 120px">
        <div
          class="round w-100 d-flex justify-content-center align-items-center"
          style="height: 100%"
        >
          <div
            class="logo d-flex justify-content-center align-items-center"
            :style="{
              animationDelay,
            }"
          >
            <img
              class="lazy"
              :src="picture"
              height="100"
              :style="{ filter: imageFilter }"
            />
          </div>
        </div>
      </b-col>
      <b-col cols="12">
        {{ $t("Proefficiency") }}
        <ability-chart :level="ability.level || 0" />
      </b-col>
      <b-col cols="12" class="text-center">
        <p class="description pt-3">
          {{ abstract }}
          <b-button
            type="button"
            variant="link"
            @click="openDescription"
            v-if="extendDescription"
          >
            {{ $t("See more") }}
          </b-button>
        </p>
      </b-col>
    </b-row>
  </b-col>
</template>
<script lang="ts">
import AbilityChart from "./AbilityChart.vue";

export default {
  name: "AbilityDescription",
  components: { AbilityChart },
  props: {
    ability: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      animationDelay: Math.random() * 20 + "s",
    };
  },
  methods: {
    openDescription: function () {
      if (this.ability.description && this.extendDescription) {
        this.$emit("modal", {
          title: this.ability.name,
          content: this.ability.description,
        });
      }
    },
  },
  computed: {
    lang() {
      return this.$root.lang;
    },
    extendDescription() {
      return this.ability.description && this.ability.description.length >= 30;
    },
    picture() {
      if (this.ability.image.length) {
        return require(`@/assets/images/${this.ability.image}`);
      }
      return "";
    },
    abstract() {
      if (this.ability.description && this.ability.description.length > 30) {
        return (
          String(
            this.ability.description.replace(/<.+>/gim, "").substring(0, 30)
          ).trim() + "..."
        );
      }
      return this.ability.description || "";
    },
    imageFilter() {
      return this.ability.imageFilter || "";
    },
  },
};
</script>
<style scoped>
.logo {
  width: 100px;
  position: relative;
}
.logo::before {
  transition: ease-in-out 200ms;
  background: var(--alpha-white);
  height: 110%;
  width: 110%;
  content: "";
  position: absolute;
  border-radius: 50px;
}
.ability-content {
  /* border: 1px solid rgba(255, 255, 255, 0.325); */
  background-color: rgba(255, 255, 255, 0.05);
  user-select: none;
  overflow: hidden;
}
.ability-content:hover {
  background-color: rgba(0, 0, 0, 0.199);
}
.ability-content:hover .logo::before {
  height: 145%;
  width: 145%;
  animation: geometry infinite 10s;
}
.description {
  min-height: 105px;
}

@keyframes geometry {
  0%,
  15% {
    border-radius: 50px;
  }

  20%,
  35% {
    border-radius: 0px;
  }

  40%,
  55% {
    border-radius: 5px;
    transform: rotateZ(45deg);
  }

  60%,
  75% {
    transform: rotateZ(90deg);
    border-radius: 25px;
  }
  80%,
  100% {
    transform: rotateZ(0deg);
    border-radius: 50px;
  }
}
</style>
