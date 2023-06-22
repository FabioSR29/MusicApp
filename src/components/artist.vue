<template>
    <div class="inicio" v-show="artistVisible.visibilidad">
        <p class="titulos">Nuevos artistas</p> 
       
        <div class="arrows">
            <span>ver mas+</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(0, 225, 255)" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(0, 225, 255)" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </div>
        


    </div>

 <div class="cartas" v-show="artistVisible.visibilidad">


<div class="myCard">
  <div class="innerCard">

      <div class="frontSide uno">

        <div class="cardText">
            <p class="title">Pop artist</p>
          <p class="title">The weekend</p>
        </div>
       
      </div>


      <div class="backSide">
          <p class="title">Informacion:</p>
          <p>Weeknd, es un cantante, rapero, compositor, productor discográfico y actor canadiense nacionalizado</p>
          <button class="Botones" @click="navegar('the weekend')">Ver mas+</button>
      </div>
  </div>
</div>

<div class="myCard">
  <div class="innerCard">
      <div class="frontSide dos">
        <div class="cardText">
          <p class="title">Pop artist</p>
          <p class="title">Post Malone</p>
        </div>
      </div>
      <div class="backSide">
          <p class="title">Informacion:</p>
          <p>Austin Richard Post, más conocido por su nombre artístico Post Malone, es un rapero, cantante, actor y compositor estadounidense </p>
          <button class="Botones" @click="navegar('post malone')">Ver mas+</button>
        </div>
  </div>
</div>

<div class="myCard">
  <div class="innerCard">
      <div class="frontSide tres">
        <div class="cardText">
          <p class="title">Rock band</p>
          <p class="title">Linkin Park</p>
        </div>
      </div>
      <div class="backSide">
          <p class="title">Informacion:</p>
          <p>Linkin Park es una banda estadounidense de rock alternativo procedente de Agoura Hills, California formada en 1996.</p>
          <button class="Botones" @click="navegar('linkin park')">Ver mas+</button>
        </div>
  </div>
</div>

<div class="myCard">
  <div class="innerCard">
      <div class="frontSide cuatro">
        <div class="cardText">
          <p class="title">Pop artist</p>
          <p class="title">Ariana Grande</p>
        </div>
      </div>
      <div class="backSide">
          <p class="title">Informacion:</p>
         <p>Ariana Grande Butera ​ es una cantante, compositora, empresaria, instrumentista, productora discográfica y actriz estadounidense.​ </p>
         <button class="Botones" @click="navegar('ariana grande')">Ver mas+</button>
        </div>
  </div>
</div>

<div class="myCard">
  <div class="innerCard">
      <div class="frontSide cinco">
        <div class="cardText">
          <p class="title">Rock Band</p>
          <p class="title">AC/DC</p>
        </div>
      </div>
      <div class="backSide">
          <p class="title">Informacion:</p>
          <p>AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young y Angus Young.</p>
          <button class="Botones" @click="navegar('AC DC')">Ver mas+</button>
        </div>
  </div>
</div>

</div>

</template>

<script setup>

import { artistVisible } from "./Logica.js";
function navegar(nombre){
  artistVisible.cambiar(nombre);
  artistVisible.buscarArtista(nombre);
}

</script>

<style scoped>

.Botones{
  font-size:20px;
  font-weight: bold;
  color: white;
  background: #0f68ee;
  border-radius: 6px;
  border: white 1px solid;
}

.arrows{
    display: flex;
    justify-content: space-between;
    height: 45px;
    width: 145px;
}
.inicio{
    display: flex;
    justify-content: space-between;
    height: 10%;  
    margin-top:190px;
   
}

.inicio span{
    color: rgb(172, 172, 172);
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


.cartas{
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  margin-top: 45px;
  margin-bottom: 65PX;
  justify-content: space-around;
}
.myCard {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
}


.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
  color: rgb(255, 255, 255);
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

.innerCard {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.myCard:hover .innerCard {
  transform: rotateY(180deg);
}

.frontSide,
.backSide {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  color: white;
  box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
  font-weight: 700;
}

.uno,
.uno::before{
    background-image:url('https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/05/15/16841672231903.jpg') ;
    background-size: 111% 100%;
}

.dos,
.dos::before{
    background-image:url("https://i.scdn.co/image/ab6761610000e5eb6be070445b03e0b63147c2c1") ;
    background-size: 111% 100%;
}

.tres,
.tres::before{
    background-image:url("https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2020/08/ditinggal-chester-bennington-linkin-park-batalkan-tur_m_146091.jpeg") ;
    background-size: 111% 100%;
}


.cuatro,
.cuatro::before{
    background-image:url("https://images.hola.com/imagenes/belleza/actualidad/20211115199347/ariana-grande-nueva-imagen-retoque-filtros/1-19-129/ariana-getty-t.jpg?tx=w_680") ;
    background-size: 111% 100%;
}

.cinco,
.cinco::before{
    background-image:url("https://thedarkmelody.com/wp-content/uploads/2021/06/acdc.jpg") ;
    background-size: 111% 100%;
}


.backSide,
.backSide::before {
  background-image: linear-gradient(160deg, #2d2f30 20%, #0fdfee 80%);
}

.backSide {
  transform: rotateY(180deg);
}

.frontSide::before,
.backSide::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 110%;
  height: 110%;
  position: absolute;
  z-index: -1;
  border-radius: 1em;
  filter: blur(10px);
}

.cardText{
    
 background:rgb(2, 2, 2);
 margin-top:175px;
 width: 100%;
 border:1px solid white


}
</style>