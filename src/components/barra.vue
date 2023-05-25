<template>
   <div class="elements">

    <div class="heart">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(0, 225, 255)" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      <p>liked</p>
    </div>
    
    <div class="microphone">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" stroke-width="1.5" stroke="rgb(0, 225, 255)" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
        <p>podcast</p>
    </div>

    <button class="button">
         <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
    </button>

    <div class="user">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="rgb(0, 225, 255)" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <p>user</p>
    </div>

    <div class="folder">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(0, 225, 255)" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>

        <p>files</p>
    </div>

    </div>
</template> 

<style scoped>

.heart{
    height: 5px;
    width: 48px;
    margin-top: 26px;
    margin-right: 35px;
}
p{
  color: #fff;
  margin-top: -8px;
  text-align: center;
  font-size: 12px;
}
.user{
    height: 15px;
    width: 58px;
    margin-top: 26px;
    margin-left: 35px;
}
.user p{
  margin-top: -15px; 
}
.microphone{
    height: 1px;
    width: 60px;
    margin-top: 26px;
    margin-right: 25px;
}

.microphone p{
  margin-top: -20px; 
}
.folder{
    height: 1px;
    width: 48px;
    margin-top: 26px;
    margin-left: 25px;
}
.elements{
  position: fixed;
  display: flex;
  height: 93px;
  width: 100%;
  bottom: 0%;
  margin-left: -1%;
  border-radius: 15px;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  border:1px solid cyan;
}

.button {
  display: flex;
  justify-content: center;
  color: #fff;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: linear-gradient(30deg, rgb(0, 225, 255)20%, rgb(92, 91, 90) 80%);
  transition: all 0.3s ease-in-out 0s;
  box-shadow: rgba(193, 244, 246, 0.698) 0px 0px 0px 0px;
  animation: 1.2s cubic-bezier(0.8, 0, 0, 1) 0s infinite normal none running pulse;
  align-items: center;
  border: 0;
}

.button:is(:hover, :focus) {
  transform: scale(1.2);
}

@keyframes pulse {
  100% {
    box-shadow: 0 0 0 45px rgba(193,244,246,0);
  }
}

</style>