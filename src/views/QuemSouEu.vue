<template>
  <section class="quem-sou-eu">
    <h1>Quem Sou Eu?</h1>
    <img :src="foto" alt="Foto de Pedro" class="foto-perfil" />

    <p>
      O meu nome é Pedro Miguel Pereira, tenho 47 anos e sou licenciado em
      Engenharia Informática pela Universidade Aberta. Moro em Santarém e sou
      apaixonado por tecnologia e inovação.
    </p>

    <p>
      Gosto de estar a evoluir constantemente e aprender coisas novas. Sou
      responsável e cumpro com profissionalismo os objetivos que me são
      confiados.
    </p>

    <p>
      Para além da minha carreira, valorizo muito a vida familiar, sou pai de
      dois filhos e gosto de passar tempo de qualidade com a família.
    </p>
  </section>
</template>

<script>
import foto from "../assets/foto.jpg";

export default {
  name: "QuemSouEu",
  data() {
    return {
      foto,
    };
  },
};
</script>

<style scoped>
.quem-sou-eu {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.foto-perfil {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 1rem 0;
}

p {
  margin: 1rem 0;
  line-height: 1.6;
  text-align: justify;
}
</style>
