<template>
  <Fragment>
    <div class="container">
      <P1 />
      <separator />
      <P2 />
      <separator />
      <P3 />
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import separator from "@/components/shared/separator.vue";
import P1 from "@/components/pages/P1.vue";
import P2 from "@/components/pages/P2.vue";
import P3 from "@/components/pages/P3.vue";
import saveData from "@/mixins/saveData.js";
export default {
  mixins: [saveData],
  components: {
    Fragment,
    separator,
    P1,
    P2,
    P3,
  },
  mounted() {
    this.setInputData();
  },
  methods: {
    setInputData() {
      let data = this.getData();
      for (let item in data) {
        let input = document.getElementById(item);
        input.value = data[item];
      }
    },
  },
};
</script>
