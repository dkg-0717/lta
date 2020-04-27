<template>
  <section>
    <div class="row mb-5">
      <div class="col-md-6 d-flex align-items-center">
        <p data-aos="fade-down">
          Utiliza esta guía para tener control sobre tus actividades,
          identificar cuándo baja tu motivación y aprender a identificar qué
          hacer para mantenerte productivo.
        </p>
      </div>
      <div class="col-md-6">
        <topLogo />
      </div>
    </div>

    <Notice />

    <div class="row mb-5" v-for="(question, index) in questions" :key="index">
      <containerInput
        :title="question.title"
        :totalInputs="question.totalInputs"
        :routeImage="question.routeImage"
        :id="index"
      />
    </div>

    <div class="row mb-4">
      <div class="col-md-12 custom-bg">
        <h3 class="text-center text-white" data-aos="fade-down">
          ¡Hora de tomar un respiro!
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 text-center custom-card">
        <img
          src="@/assets/images/P2/ejercicio.png"
          class="img-fluid"
          alt="Responsive image"
          data-aos="zoom-in"
        />
        <h3 class="card-title" data-aos="fade-down">Estírate</h3>
      </div>
      <div class="col-md-4 text-center custom-card">
        <img
          src="@/assets/images/P2/family.png"
          class="img-fluid"
          alt="Responsive image"
          data-aos="zoom-in"
        />
        <h3 class="card-title" data-aos="fade-down">Convive</h3>
      </div>
      <div class="col-md-4 text-center custom-card">
        <img
          src="@/assets/images/P2/rest.png"
          class="img-fluid"
          alt="Responsive image"
          data-aos="zoom-in"
        />
        <h3 class="card-title" data-aos="fade-down">Relájate</h3>
      </div>
    </div>
    <div class="row mb-4 mt-4">
      <div class="col-md-12 text-center">
        <h3 data-aos="fade-down">Ahora vuelve y completa tus tareas:</h3>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-6">
        <inputs-only
          title="Lo que logré en el día fue:"
          totalInputs="3"
          :routeImage="'auto/logros'"
        />
      </div>
      <div class="col-md-6">
        <inputs-only
          title="Mis pendientes para mañana son:"
          totalInputs="3"
          :routeImage="'auto/pendientes'"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4">
        <bottom-logo />
      </div>
      <div class="col-md-8 d-flex align-items-center justify-content-end">
        <h4 class="text-center" data-aos="fade-down">
          ¡Utiliza esta guía diariamente hasta que lo conviertas en hábitos!
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
import topLogo from "@/components/shared/topLogo.vue";
import bottomLogo from "@/components/shared/bottomLogo.vue";
import containerInput from "@/components/shared/containerInput.vue";
import inputsOnly from "@/components/inputsOnly.vue";
import Notice from "@/components/Notice.vue";

export default {
  components: {
    inputsOnly,
    bottomLogo,
    Notice,
    topLogo,
    containerInput,
  },
  data() {
    return {
      questions: [
        {
          title: "¿Qué me motiva a trabajar hoy?",
          routeImage: "P2/cohete",
        },
        {
          title: "Mis tres objetivos del día son:",
          totalInputs: "3",
          routeImage: "P2/tiro",
        },
        {
          title: "En mi espacio de trabajo voy a colocar:",
          routeImage: "P2/pc",
        },
        {
          title: "Lo que más me distrae en casa es:",
          routeImage: "P2/phone",
        },
        {
          title: "Y para controlar la distracción yo:",
          routeImage: "P2/focus",
        },
      ],
    };
  },
};
</script>

<style>
@import url("../../assets/css/P2.css");
</style>

<style scoped>
.card-title {
  color: #fff;
  background-color: rgb(38, 53, 115);
  padding: 7px;
  display: block;
}
.custom-bg {
  background-color: rgb(130, 221, 206);
}
</style>
