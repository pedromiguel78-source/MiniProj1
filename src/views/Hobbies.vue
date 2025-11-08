<template>
  <div class="hobbies-page">
    <!-- Título da página -->
    <h1>Os Meus Hobbies</h1>

    <!-- Galeria de imagens dos hobbies -->
    <div class="container-gallery">
      <!-- Hobby: Música -->
      <div class="gallery-item column-width-2 row-width-2">
        <div class="photo">
          <img src="@/assets/musica.jpg" alt="Música e Concertos Heavy Metal" />
        </div>
        <div class="text">Música e Concertos Heavy Metal</div>
      </div>

      <!-- Hobby: Viajar -->
      <div class="gallery-item column-width-1 row-width-3">
        <div class="photo">
          <img src="@/assets/viajar.jpg" alt="Viajar" />
        </div>
        <div class="text">Viajar</div>
      </div>

      <!-- Hobby: Bicicleta -->
      <div class="gallery-item column-width-1 row-width-2">
        <div class="photo">
          <img src="@/assets/bicicleta.jpeg" alt="Bicicleta" />
        </div>
        <div class="text">Bicicleta</div>
      </div>

      <!-- Hobby: Natação -->
      <div class="gallery-item column-width-1 row-width-2">
        <div class="photo">
          <img src="@/assets/natacao.jpeg" alt="Natação" />
        </div>
        <div class="text">Natação</div>
      </div>

      <!-- Hobby: Leitura -->
      <div class="gallery-item column-width-2 row-width-2">
        <div class="photo">
          <img src="@/assets/leitura.jpeg" alt="Leitura e Aprender" />
        </div>
        <div class="text">Leitura e Aprender</div>
      </div>
    </div>
  </div>
</template>

<script>
// Componente responsável por mostrar os hobbies do utilizador
export default {
  name: "HobbiesView",
};
</script>

<style scoped>
/* Estrutura geral da página */
.hobbies-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Título principal */
.hobbies-page h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

/* Estrutura em grelha da galeria */
.container-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
  grid-auto-flow: dense;
}

/* Cada item da galeria */
.gallery-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

/* Área da imagem */
.gallery-item .photo {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
}

/* Imagem do hobby */
.gallery-item .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease-in-out;
}

/* Efeito de zoom ao passar o rato */
.gallery-item:hover .photo img {
  transform: scale(1.5);
}

/* Texto sobreposto à imagem */
.gallery-item .text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Efeito de destaque do texto ao hover */
.gallery-item:hover .text {
  background-color: #fff;
  color: #555;
  outline: 2px solid #fff;
  text-shadow: none;
}

/* Configurações de tamanho da grelha */
.column-width-1 {
  grid-column: span 1;
}
.column-width-2 {
  grid-column: span 2;
}
.row-width-2 {
  grid-row: span 2;
}
.row-width-3 {
  grid-row: span 3;
}

/* Responsividade: tablets */
@media (max-width: 768px) {
  .container-gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 80px;
  }

  .hobbies-page h1 {
    font-size: 1.8rem;
  }
}

/* Responsividade: telemóveis */
@media (max-width: 480px) {
  .container-gallery {
    grid-template-columns: 1fr;
    grid-auto-rows: 100px;
  }

  .column-width-2,
  .column-width-3 {
    grid-column: span 1 !important;
  }

  .row-width-2,
  .row-width-3 {
    grid-row: span 1 !important;
  }
}
</style>
