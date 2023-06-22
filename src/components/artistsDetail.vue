<template>

    <div class="contenedor" v-show="!artistVisible.visibilidad">

        <img :src="artistVisible.imagen" alt="imagenartista" v-show="artistVisible.visibilidadImagen">
        <div class="informacion">
            <p class="titulos">Nombre: {{ artistVisible.artista }}</p>
            <p class="titulos">Genero:{{ artistVisible.genero }}</p>
            <p class="titulos">Seguidores: {{ artistVisible.followers }}</p>
            <button @click="navegar('NONE')" class="Botones">Regresar</button>
        </div>
       
        
    </div>
    
</template>

<script setup>
import { artistVisible } from "./Logica.js";
import { ref  } from 'vue'

function navegar(nombre){
    artistVisible.cambiar(nombre);
}

</script>

<style scoped>

.contenedor{
    display: flex;
    border: rgb(0, 238, 255) 1px solid;
    height: 334px;
    width: 100%;
    margin-top: 205px;
    margin-bottom: 105px;
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


