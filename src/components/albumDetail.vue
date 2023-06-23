<template>
  

    <div class="contenedor" v-show="!albumesVisible.visibilidad">
      <div class="loader" v-if="albumesVisible.carga">
        <div class="cell d-0"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>

        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        
        
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        
        
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        
        
     </div>
     <div class="contenedor2" v-else>
      <img :src="albumesVisible.imagenUrl" alt="album imagen" v-show="true">
        <div class="informacion">
        <p class="titulos">Nombre del album: {{albumesVisible.name }}</p>
        <p class="titulos">Total de canciones: {{ albumesVisible.total_tracks }}</p>
            <p class="titulos">Tipo: {{ albumesVisible.album_type }}</p>
          
         
            <button @click="navegar('NONE')" class="Botones">Regresar</button>
        </div>
     </div>
      
       
    </div>
    
</template>

<script setup>
import { albumesVisible } from "./Logica.js";


function navegar(){
  albumesVisible.cambiar();
  albumesVisible.name=""
  albumesVisible.total_tracks=""
  albumesVisible.album_type=""
  albumesVisible.imagenUrl=""
  albumesVisible.carga=true
}
</script>

<style scoped>
.contenedor2{
    display: flex;
    flex-wrap: wrap;
}
.contenedor{
    display: flex;
    flex-wrap: wrap;
    border: rgb(0, 238, 255) 2px solid;
    height: 334px;
    width: 100%;
    overflow: scroll;
    margin-top: 205px;
    margin-bottom: 105px;
    box-shadow: 0 0 0.3em rgba(136, 128, 128, 0.5);
    position: relative;
}
img{
  height: 350px;
    width: 350px;
}
.Botones{
  font-size:20px;
  font-weight: bold;
  color: white;
  background: #0f68ee;
  border-radius: 6px;
  border: white 1px solid;
}
.titulos{
    font-size:20px;
  font-weight: bold;
  color: white;
      text-shadow: 
        0 0 5px rgb(0, 0, 0),
        0 0 5px rgb(0, 0, 0),
        0 0 5px rgb(10, 10, 10),
        0 0 5px rgb(0, 0, 0),
        0 0 5px rgb(0, 0, 0),
        0 0 5px rgb(0, 0, 0),
        0 0 5px rgb(0, 0, 0),
        0 0 5px rgb(0, 0, 0),
        0 0 5px rgb(0, 0, 0),
        0 0 5px rgb(0, 0, 0);  
}


.loader {
    margin-left: 45%;
  --cell-size: 52px;
  --cell-spacing: 1px;
  --cells: 3;
  --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
  display: flex;
  flex-wrap: wrap;
  width: var(--total-size);
  height: var(--total-size);
}

.cell {
  flex: 0 0 var(--cell-size);
  margin: var(--cell-spacing);
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 4px;
  animation: 1.5s ripple ease infinite;
}

.cell.d-1 {
  animation-delay: 100ms;
}

.cell.d-2 {
  animation-delay: 200ms;
}

.cell.d-3 {
  animation-delay: 300ms;
}

.cell.d-4 {
  animation-delay: 400ms;
}

.cell:nth-child(1) {
  --cell-color: #00FF87;
}

.cell:nth-child(2) {
  --cell-color: #0CFD95;
}

.cell:nth-child(3) {
  --cell-color: #17FBA2;
}

.cell:nth-child(4) {
  --cell-color: #23F9B2;
}

.cell:nth-child(5) {
  --cell-color: #30F7C3;
}

.cell:nth-child(6) {
  --cell-color: #3DF5D4;
}

.cell:nth-child(7) {
  --cell-color: #45F4DE;
}

.cell:nth-child(8) {
  --cell-color: #53F1F0;
}

.cell:nth-child(9) {
  --cell-color: #60EFFF;
}

/*Animation*/
@keyframes ripple {
  0% {
    background-color: transparent;
  }

  30% {
    background-color: var(--cell-color);
  }

  60% {
    background-color: transparent;
  }

  100% {
    background-color: transparent;
  }
}

</style>




