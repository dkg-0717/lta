<template>
  <section>
    <div class="row mb-2">
      <div class="col-md-6 d-flex align-items-center">
        <h4 data-aos="fade-down">
          Cuando el motivo por el que trabajamos en casa se debe a una
          emergencia de protección civil o de salud, uno de los retos a
          enfrentar es mantener nuestra salud mental equilibrada.
        </h4>
      </div>
      <div class="col-md-6">
        <topLogo />
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-12">
        <h4 class="text-left" data-aos="fade-down">
          Para ayudar a enfrentar esos momentos, te compartimos la siguiente
          guía:
        </h4>
      </div>
    </div>

    <div class="row mb-5" v-for="(question, index) in questions" :key="index">
      <containerInput
        :title="question.title"
        :routeImage="question.routeImage"
      />
    </div>

    <div class="row">
      <div class="col-md-6">
        <inputs-only
          title="Mis tres formas de relajarme si me encuentro inquieto/a son:"
          totalInputs="3"
          :routeImage="'auto/relajarse'"
        />
      </div>
      <div class="col-md-6">
        <inputs-only
          title="Las tres cosas positivas de esta situación son:"
          totalInputs="3"
          :routeImage="'auto/positivas'"
        />
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-12 mb-3">
        <h2 class="text-left" data-aos="fade-down">
          También te compartimos las siguientes recomendaciones:
        </h2>
      </div>
      <div class="col-md-8">
        <ul>
          <li data-aos="fade-down">
            Mantente en contacto con tus amigos y compañeros. Aunque estés en
            casa formas parte de un equipo.
          </li>
          <li data-aos="fade-down">
            No veas todo el tiempo tus redes sociales o las noticias, estar
            sobre informado no ayuda a resolver el problema.
          </li>
          <li data-aos="fade-down">
            Haz ejercicio, uno de los principales problemas que puedes enfrentar
            al volver a tus actividades es la falta de condición física.
          </li>
          <li data-aos="fade-down">
            Dedica un tiempo a ti mismo con algo que siempre te hubiera gustado
            hacer en casa si no te tuvieras que transportar.
          </li>
        </ul>
      </div>
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img
          src="../../assets/images/P3/engine.png"
          alt=""
          data-aos="zoom-in"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-4">
        <bottom-logo />
      </div>
      <div class="col-md-8 d-flex justify-content-center align-items-center">
        <p data-aos="fade-down">
          Las situaciones inesperadas son difíciles de afrontar pero no
          imposibles, juntos encontraremos la forma de salir adelante.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import topLogo from "@/components/shared/topLogo.vue";
import bottomLogo from "@/components/shared/bottomLogo.vue";
import containerInput from "@/components/shared/containerInput.vue";
import inputsOnly from "@/components/inputsOnly.vue";
export default {
  components: {
    inputsOnly,
    topLogo,
    bottomLogo,
    containerInput,
  },
  data() {
    return {
      questions: [
        {
          title: "¿Qué es lo que más me preocupa de esta situación?",
          routeImage: `P3/people`,
        },
        {
          title:
            "¿Quién o quienes son las personas con las que puedo hablar cuando me sienta preocupado o preocupada?",
          routeImage: `P3/telephone`,
        },
        {
          title:
            "¿Cuáles son las fuentes confiables de las que puedo obtener información?",
          routeImage: `P3/hoja`,
        },
        {
          title:
            "¿Quién en mi empresa puede informarme de nuestra situación o a quién puedo pedir informes si lo necesito?",
          routeImage: `P3/group`,
        },
      ],
    };
  },
};
</script>
