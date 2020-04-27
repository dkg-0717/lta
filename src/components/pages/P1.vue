<template>
  <section>
    <div class="row">
      <div class="col-md-6 d-flex align-items-center">
        <h1 class="text-left title" data-aos="fade-down">Trabajo en casa</h1>
      </div>
      <div class="col-md-6">
        <top-logo />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p data-aos="fade-down">
          Trabajar en casa nos ofrece múltiples beneficios, como poder
          administrar nuestro tiempo, ahorrar viajes en el transporte, mayor
          convivencia con la familia o tiempo para hobbies. Sin embargo,
          representa también un reto por las siguientes razones:
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ul class="p1-ul">
          <li data-aos="fade-down">Espacio inadecuado para trabajar.</li>
          <li data-aos="fade-down">Mayores distracciones.</li>
          <li data-aos="fade-down">Falta de concentración.</li>
        </ul>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-12">
        <p data-aos="fade-down">
          Como toda actividad nueva, al trabajar desde casa pasaremos por una
          curva en la que al estar motivados por el inicio de algo nuevo
          alcanzaremos niveles óptimos de desempeño, sin embargo con el paso de
          los días, la motivación puede parar y bajar el rendimiento.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <img
          src="../../assets/images/P1/g1.png"
          class="img-fluid"
          alt="Responsive image"
          data-aos="zoom-in"
        />
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-md-12">
        <h2 class="text-left" data-aos="fade-down">Ley Yerkes-Dodson (1908)</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p class="text-left text-work" data-aos="fade-down">
          ¿Qué debemos recordar al trabajar desde casa?
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-12">
        <ul>
          <li data-aos="fade-down">
            Aunque el lugar sea diferente, nuestras responsabilidades son las
            mismas.
          </li>
          <li data-aos="fade-down">
            Los objetivos organizaciones siguen presentes.
          </li>
          <li data-aos="fade-down">
            La organización necesita del cumplimiento de nuestras actividades
            para continuar operando.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import topLogo from "@/components/shared/topLogo.vue";
export default {
  components: {
    topLogo
  }
};
</script>

<style scoped>
.title {
  font-size: 3em;
}
.img-fluid {
  width: 100%;
  height: 100%;
}

.text-work {
  font-weight: 700;
}
</style>
