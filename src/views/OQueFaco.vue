<template>
  <section class="oque-faco">
    <h1>O Que Faço?</h1>
    <img :src="cnc" alt="CNC" class="foto-cnc" />
    <p>
      Sou Programador CAD/CAM e técnico de máquinas CNC, com mais de 30 anos de
      experiência na programação e automatização de processos de fabrico.
      Iniciei nesta área em 1993 como Técnico de Programação CNC e, desde 2015,
      especializei-me em programação CAD/CAM para sistemas avançados de fabrico
      maquinação com 5 eixos.
    </p>
    <p>
      Atualmente, trabalho como Programador CAD/CAM - CNC 5 Eixos, sendo
      responsável pelo design de mobiliário, modelação 3D e desenvolvimento de
      programas CAD/CAM para máquinas CNC.
    </p>
    <p>
      A minha experiência inclui o desenvolvimento de processos automatizados,
      otimização de programações CNC e criação de soluções para o setor do
      mobiliário e indústrias transformadoras. Procuro sempre combinar
      conhecimento técnico, design e engenharia para garantir qualidade,
      eficiência e inovação em cada projeto, mantendo-me atualizado com as novas
      tecnologias e metodologias da área.
    </p>
  </section>
</template>

<script>
import cnc from "../assets/cnc.jpg";

export default {
  name: "OQueFaco",
  data() {
    return {
      cnc,
    };
  },
};
</script>

<style scoped>
.oque-faco {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.foto-cnc {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin: 1.5rem 0;
}

p {
  text-align: justify;
  line-height: 1.6;
  margin: 1rem 0;
}
</style>
