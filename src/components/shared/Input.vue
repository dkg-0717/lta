<template>
  <input
    type="text"
    class="form-control input-bg"
    data-aos="fade-down"
    @keyup="capture"
    :ref="id"
    :id="id"
    v-model="value"
  />
</template>

<script>
import saveData from "@/mixins/saveData.js";
export default {
  data() {
    return {
      value: "",
    };
  },
  mixins: [saveData],
  props: {
    id: {
      type: String,
    },
  },
  methods: {
    capture() {
      for (let input in this.$refs) {
        this.saveData(input, this.value);
      }
    },
  },
};
</script>
