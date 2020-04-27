<template>
  <div class="input-container">
    <h3 class="input-title text-white text-center" data-aos="fade-down">
      {{ title }}
    </h3>
    <form>
      <div
        class="form-group"
        v-for="(input, index) in Number(totalInputs)"
        :key="index"
      >
        <Input :id="createID(index)" />
      </div>
    </form>
  </div>
</template>

<script>
import Input from "@/components/shared/Input.vue";
export default {
  components: {
    Input,
  },
  props: {
    title: {
      type: String,
    },
    totalInputs: {
      type: String,
      default: "1",
    },
    routeImage: {},
  },
  methods: {
    createID(index) {
      return `${this.routeImage.split("/")[1]}-${index}`;
    },
  },
};
</script>

<style scoped>
.input-title {
  background-color: rgb(130, 221, 206);
}
.input-bg-custom {
  background-color: #f2f2f2;
}
</style>
