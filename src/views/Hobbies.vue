<template>
  <div class="hobbies-page">
    <h1>Os Meus Hobbies</h1>
    <div class="container-gallery">
      <div class="gallery-item column-width-2 row-width-2">
        <div class="photo">
          <img src="@/assets/musica.jpg" alt="Música e Concertos Heavy Metal" />
        </div>
        <div class="text">Música e Concertos Heavy Metal</div>
      </div>

      <div class="gallery-item column-width-1 row-width-3">
        <div class="photo">
          <img src="@/assets/viajar.jpg" alt="Viajar" />
        </div>
        <div class="text">Viajar</div>
      </div>

      <div class="gallery-item column-width-1 row-width-2">
        <div class="photo">
          <img src="@/assets/bicicleta.jpeg" alt="Bicicleta" />
        </div>
        <div class="text">Bicicleta</div>
      </div>

      <div class="gallery-item column-width-1 row-width-2">
        <div class="photo">
          <img src="@/assets/natacao.jpeg" alt="Natação" />
        </div>
        <div class="text">Natação</div>
      </div>

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
export default {
  name: "HobbiesView",
};
</script>

<style scoped>
.hobbies-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hobbies-page h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.container-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 10px;
  grid-auto-flow: dense;
}

.gallery-item {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.gallery-item .photo {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.gallery-item .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.gallery-item:hover .photo img {
  transform: scale(1.5);
}

.gallery-item .text {
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 25px;
  z-index: 0;
  transition: 0.3s ease-in-out;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.gallery-item:hover .text {
  opacity: 1;
  padding: 1em;
  width: 100%;
  text-align: center;
  outline: 2px solid #fff;
  color: #555;
  background-color: #fff;
  text-shadow: none;
}

.column-width-1 {
  grid-column: span 1;
}

.column-width-2 {
  grid-column: span 2;
}

.column-width-3 {
  grid-column: span 3;
}

.row-width-1 {
  grid-row: span 1;
}

.row-width-2 {
  grid-row: span 2;
}

.row-width-3 {
  grid-row: span 3;
}

@media (max-width: 768px) {
  .container-gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 80px;
  }

  .hobbies-page h1 {
    font-size: 1.8rem;
  }
}

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
