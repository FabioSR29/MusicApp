<template>
    <div class="inicio" v-show="albumesVisible.visibilidad">
        <p class="titulos">Albumes populares</p> 
       
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


<div class="albumes" v-show="albumesVisible.visibilidad">


    <button class="card" @click="navegar('71O60S5gIJSIAhdnrDIh3N')">
    <div class="temporary_text">
        <div class="imagen uno"></div>
    </div>
    <div class="card_content">
    <span class="card_title">Black_Pink_The album</span>
        <span class="card_subtitle">Lorem ipsum dolor sit amet conse</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
    </div>

    </button>

    <button class="card" @click="navegar('3RQQmkQEvNCY4prGKE6oc5')">
    <div class="temporary_text">

        <div class="imagen dos"></div>
           
    </div>
    <div class="card_content">
    <span class="card_title">Bad_Bunny_Un_Verano_Sin_Ti</span>
        <span class="card_subtitle">Lorem ipsum dolor sit, amet consectetur</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
    </div>

    </button>


    
    <button class="card" @click="navegar('2eRJUtI7nXrQ5uYQ7tzTo9')">
    <div class="temporary_text">

        <div class="imagen tres"></div>
           
    </div>
    <div class="card_content">
    <span class="card_title">Lady_Gaga_Artpop</span>
        <span class="card_subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quidem i</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
    </div>

    </button>

    
    <button class="card" @click="navegar('4Gfnly5CzMJQqkUFfoHaP3')">
    <div class="temporary_text">

        <div class="imagen cuatro"></div>
           
    </div>
    <div class="card_content">
    <span class="card_title">Linkin_Park_Meteora</span>
        <span class="card_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur </span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
    </div>

    </button>

    
    <button class="card" @click="navegar('151w1FgRZfnKZA9FEcg9Z3')">
    <div class="temporary_text">

        <div class="imagen cinco"></div>
           
    </div>
    <div class="card_content">
    <span class="card_title">Midnights_-_Taylor_Swift</span>
        <span class="card_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias minima</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
    </div>

    </button>

</div>
  

</template>

<script setup>
import { albumesVisible } from "./Logica.js";

function navegar(ID){
  albumesVisible.buscarAlbum(ID);
  albumesVisible.cambiar();
}
</script>

<style scoped>

.albumes{
display: flex;
gap: 13px;
flex-wrap: wrap;
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
.imagen{
    background-size: 111% 100%;
    width: 250px;
    height: 250px;
}

.uno{
    background-image: url("https://media.s-bol.com/BrzR6GMOq5ko/550x550.jpg") ;
}
.dos{
    background-image: url("https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png") ;
}
.tres{
    background-image: url("https://upload.wikimedia.org/wikipedia/en/3/39/Artpop_cover.png") ;
}

.cuatro{
    background-image: url("https://lashistoriasdelrock.com/wp-content/uploads/2023/04/descarga.gif") ;
}

.cinco{
    background-image: url("https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png") ;
}


.card {
  position: relative;
  width: 250px;
  height: 250px;
  color: #2e2d31;
  background: #131313;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 100px;
}

.temporary_text {
  font-weight: bold;
  font-size: 24px;
  padding: 6px 12px;
  color: #f8f8f8;

}

.card_title {
  font-weight: bold;
}

.card_content {
  position: absolute;
  left: 0;
  bottom: 0;
   
  width: 100%;
  padding: 20px;
  background: #14eeee;
  border-top-left-radius: 20px;
  transform: translateY(150px);
  transition: transform .25s;
}

.card_content::before {
  content: '';
  position: absolute;
  top: -47px;
  right: 450px;
  width: 450px;
  height: 450px;
  transform: rotate(-175deg);
  border-radius: 50%;
  box-shadow: inset 48px 48px #f2f2f2;
}

.card_title {
  color: #131313;
  line-height: 5px;
}

.card_subtitle {
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
}

.card_description {
  font-size: 14px;
  opacity: 0;
  transition: opacity .5s;
}

.card:hover .card_content {
  transform: translateY(0);
}

.card:hover .card_description {
  opacity: 1;
  transition-delay: .25s;
}


</style>