import { reactive } from "vue";

export let data = reactive({
     visibilidad:true,
     cambiar(){
        this.visibilidad = false;
     }
     
});
//////////////////////////////////////////////////
export let albumesVisible = reactive({
    visibilidad:true,
    album_type:"---",
    total_tracks:0,
    imagenUrl:"none",
    name:"",
    carga:true,
    cambiar(){
      if(this.visibilidad==true){
        this.visibilidad=false
      }else{
         this.visibilidad=true
      }
    },
    buscarAlbum(id) {
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
    
    
              fetch(`https://api.spotify.com/v1/albums/${id}`, {
                  headers: {
                      'Authorization': 'Bearer ' + accessToken
                  }
              })
                  .then(response => response.json())
                  .then(searchData => {
    
                      const album = searchData;
                     
                      if (album) {
                        this.album_type=album.album_type;
                        this.total_tracks=album.total_tracks;
                        this.imagenUrl=album.images[0].url;
                        this.name=album.name;
                        this.carga=false
              
                      } else {
    
                       alert("No se encontro")
                      }
                  });
          });
    
    
    }//FIN DEL METODO
        
    
});

//////////////////////////////////////////////////////
export let artistVisible = reactive({
    visibilidad:true,
    name:"none",
    artista:"---",
    genero:"--",
    imagen:"none",
    followers:0,
    visibilidadImagen:false,
    carga:true,
    cambiar(nombre){
      this.name=nombre;
      data.visibilidad=true;
      if(this.visibilidad==true){
        this.visibilidad=false
        
      }else{
         this.visibilidad=true
      }
    },
    
   buscarArtista() {
  
   
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


          fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(this.name)}&type=artist`, {
              headers: {
                  'Authorization': 'Bearer ' + accessToken
              }
          })
              .then(response => response.json())
              .then(searchData => {

                  const artist = searchData.artists.items[0];
                 
                  if (artist) {
                    console.log(artist)
                      this.artista=artist.name;
                      this.genero= artist.genres.length > 0 ? artist.genres.join(', ') : 'No se encontraron géneros';
                      this.imagen=artist.images[0].url;
                      this.followers=artist.followers.total; 
                      this.visibilidadImagen=true;
                      this.carga=false;
            
                  } else {

                   alert("No se encontro")
                  }
              });
      });


}//FIN DEL METODO
    
});