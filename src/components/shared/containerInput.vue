<template>
  <Fragment>
    <div class="col-md-2 custom-br d-flex justify-content-center">
      <figure>
        <img
          :src="require(`@/assets/images/${routeImage}.png`)"
          alt=""
          data-aos="zoom-in"
        />
      </figure>
    </div>
    <div class="col-md-10">
      <div class="input-container">
        <h3 data-aos="fade-down">{{ title }}</h3>
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
    </div>
  </Fragment>
</template>

<script>
import Input from "@/components/shared/Input.vue";
import { Fragment } from "vue-fragment";
export default {
  components: {
    Input,
    Fragment,
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
.custom-br {
  border-right: 2px solid rgb(130, 221, 206);
}
.input-container {
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #f2f2f2;
}
</style>
