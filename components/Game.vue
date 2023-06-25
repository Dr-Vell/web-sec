<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    route:{
      type: String,
      required: true,
    }, 
    droute:{
      type: String,
      required: true,
    }, 
  });

  const game_frame = ref(null);

  function toggleFullscreen() {
    if (game_frame.value) {
      if (game_frame.value.requestFullscreen) {
        game_frame.value.requestFullscreen();
      } else if (game_frame.value.mozRequestFullScreen) {
        game_frame.value.mozRequestFullScreen();
      } else if (game_frame.value.webkitRequestFullscreen) {
        game_frame.value.webkitRequestFullscreen();
      } else if (game_frame.value.msRequestFullscreen) {
        game_frame.value.msRequestFullscreen();
      }
    }
  }
</script>


<template>
    <div class="contenido"> 
        <h1 class="contenido-titulo">{{ title }}</h1>
        <div class="iframe-container">
            <iframe :src="route" ref="game_frame" width="100%" height="100%" title="game-frame" class="iframe-game"></iframe>
            <button class="fullscreen-button" @click="toggleFullscreen">⛶</button>
        </div>
        <a v-if="droute=='1'" href="/pc-builds/Injection_Dungeon-1.0-pc.zip.001" :download="title + ' - Part 1.zip'"><button class="download-button">Download Game for Windows (Part 1)</button></a>
        <a v-if="droute=='1'" href="/pc-builds/Injection_Dungeon-1.0-pc.zip.002" :download="title + ' - Part 2.zip'"><button class="download-button">Download Game for Windows (Part 2)</button></a>
        <a v-if="droute=='2'" href="/pc-builds/Escape_the_B.A.C._Room-1.0-pc.zip" :download="title + '.zip'"><button class="download-button">Download Game for Windows</button></a>
        <a v-if="droute=='3'" href="/pc-builds/Crypto_Savior-1.0-pc.zip" :download="title + '.zip'"><button class="download-button">Download Game for Windows</button></a>
        <a v-if="droute=='4'" href="/pc-builds/Guardian_Designer-1.0-pc.zip" :download="title + '.zip'"><button class="download-button">Download Game for Windows</button></a>
    </div>
</template>
