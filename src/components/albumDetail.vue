<template>
  <ModalVue></ModalVue>

    <div class="contenedor" v-show="!albumesVisible.visibilidad">
       
        <img :src="albumesVisible.imagenUrl" alt="album imagen" v-show="true">
        <div class="informacion">
        <p class="titulos">Nombre del album: {{albumesVisible.name }}</p>
        <p class="titulos">Total de canciones: {{ albumesVisible.total_tracks }}</p>
            <p class="titulos">Tipo: {{ albumesVisible.album_type }}</p>
          
         
            <button @click="navegar('NONE')" class="Botones">Regresar</button>
        </div>
       
    </div>
    
</template>

<script setup>
import { albumesVisible } from "./Logica.js";
import ModalVue from "./Modal.vue";

function navegar(){
  albumesVisible.cambiar();
}
</script>

<style scoped>

.contenedor{
  
    display: flex;
    border: rgb(0, 238, 255) 2px solid;
    height: 334px;
    width: 100%;
    margin-top: 205px;
    margin-bottom: 105px;
    box-shadow: 0 0 0.3em rgba(136, 128, 128, 0.5);
    position: relative;
}
img{
    height: 100%;
    width: 45%;
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

</style>




