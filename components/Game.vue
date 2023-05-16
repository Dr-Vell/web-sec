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
    </div>
</template>

<style>


</style>