<template>
    <div class="panel">
        <div class="icon">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="rgb(0, 225, 255)" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            <p id="ini">MusicApp</p>


        </div>

            <div class="lupa">

                <input type="text" v-model="artistName" placeholder="Nombre del artista">

                <button class="search-button" @click="buscarArtista">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="rgb(0, 225, 255)" class="w-6 h-6 lupa">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                    <p id="ini">Buscar</p>
           </div>

    </div>

    
    <div class="resultado" v-show="visible">
            <p>Resultados de busqueda:</p>
            <p>Nombre del artista: {{ artista }}</p>
            <p>Genero: {{ genero }}</p>
             <img :src="imagen" alt="imagenartista" v-show="imagen2">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'



const visible = ref(false)
const artista =ref("-----")
const genero =ref("-----")
const imagen=ref("none")
const imagen2=ref(false);
const artistName = ref('');

function buscarArtista() {

    visible.value = true;
   
    console.log(artistName)
    const clientId = '070080c886ae4b71b5752324a9201d69';
    const clientSecret = '496308c7c51642aaa5b80aaa7b3c5fd7';


    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })
        .then(response => response.json())
        .then(data => {
            const accessToken = data.access_token;


            fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName.value)}&type=artist`, {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            })
                .then(response => response.json())
                .then(searchData => {

                    const artist = searchData.artists.items[0];
                    console.log(searchData)
                    if (artist) {

                     

                        artista.value=artist.name;
                        genero.value= artist.genres.length > 0 ? artist.genres.join(', ') : 'No se encontraron géneros';
                        imagen.value=artist.images[0].url;
                        imagen2.value=true;
              
                    } else {

                     alert("No se encontro")
                    }
                });
        });


}//FIN DEL METODO


</script>


<style scoped>

.resultado{
    display: block;

    border: 1px solid rgb(0, 238, 255);

}
.resultado img{
    height: 50%;
    width: 50%;
    margin-left: 25%;
}
.search-button {
  background-color: transparent; 
  border: none; 
  cursor: pointer; 
}
.lupa{
    display: flex;  
    height: 40px;
   
}
.panel{
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right:20px ;
}
.icon{
    display: flex;  
    height: 55px;
    width: 165px;

}
.lupa p{
    font-size:15px;
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
p{
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

@media only screen and (max-width: 475px) {
#ini{
    display: none;
}
}

</style>