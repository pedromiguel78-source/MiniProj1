<template>
  <section class="quem-sou-eu">
    <!-- Título da secção -->
    <h1>Quem Sou Eu?</h1>

    <!-- Foto de perfil -->
    <img :src="foto" alt="Foto de Pedro" class="foto-perfil" />

    <!-- Texto de apresentação -->
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
// Importa a imagem de perfil
import foto from "../assets/foto.jpg";

export default {
  name: "QuemSouEu",
  data() {
    return {
      foto, // Armazena a imagem para ser usada no template
    };
  },
};
</script>

<style scoped>
/* Estilos gerais da secção */
.quem-sou-eu {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

/* Estilo da imagem de perfil */
.foto-perfil {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 1rem 0;
}

/* Estilo do texto */
p {
  margin: 1rem 0;
  line-height: 1.6;
  text-align: justify;
}
</style>
