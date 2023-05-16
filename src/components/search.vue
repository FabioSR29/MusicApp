<template>
    <div class="panel">
        <div class="icon">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="rgb(0, 225, 255)" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            <p>MusicApp</p>


        </div>

            <div class="lupa">

                <button class="search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="rgb(0, 225, 255)" class="w-6 h-6 lupa">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                    <p>Buscar</p>
           </div>
           

    </div>
</template>

<style scoped>
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

</style>