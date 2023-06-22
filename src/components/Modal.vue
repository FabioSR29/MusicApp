<template>
     <div class="fondo" v-show="!albumesVisible.visibilidad">


    </div>

</template>

<style scoped>
.fondo{ 
    height: 100%;
    width: 100%;
position: absolute;
background: rgba(235, 229, 229, 0.5);
display:flex;
justify-content: center;
flex-wrap: nowrap;
    align-content: center;
    flex-direction: column-reverse;
    align-items: center;
    filter: blur(10px);
}
</style>

<script setup>
import { albumesVisible } from "./Logica.js";


</script>