<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        route:{
            type: String,
            required: true,
        }
    })
</script>

<template>
    <div class="contenido"> 
        <h1 class="contenido-titulo">{{ title }}</h1>
        <iframe :src="route" width="1245" height="700"></iframe>
    </div>
</template>
