<template>
  <div class="row mb-5">
    <div class="col-md-2 d-flex align-items-center">
      <img
        class="img-fluid blink focus"
        src="@/assets/foco.png"
        @click="show = !show"
        alt=""
      />
    </div>
    <div class="col-md-10 d-flex align-items-center">
      <p v-show="show">
        <i>
          Cuando abras la guía podrás ver las respuestas del día anterior, de
          esta forma recordarás cuáles eran tus objetivos y si lograste
          cumplirlos, una vez que lo llenes de nuevo la información del día
          anterior será eliminada.
        </i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
