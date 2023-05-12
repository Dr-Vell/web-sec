<script setup>

  const {
    data: news,
    pending,
  } = await useAsyncData("news", () =>
    $fetch(
      `https://newsapi.org/v2/everything?q=ciberseguridad&apiKey=24fb20258f5d4ac7b8296b6103e60b34`
    )
  );

</script>

<template>
    <div class="contenido">
        <h1 class="contenido-titulo">News</h1> 
        <template v-if="pending">Loading news...</template>
        <template v-else>
            <div v-for="articulo in news.articles" :key="articulo.url" class="articulo">
                <img :src="articulo.urlToImage" alt="Artículo imagen" class="articulo-imagen">
                <div class="articulo-info">
                    <a :href="articulo.url" target="_blank" class="articulo-titulo">{{ articulo.title }}</a>
                    <p class="articulo-autor">Por {{ articulo.author }} - {{ articulo.publishedAt }}</p>
                </div>
            </div>
        </template>
    </div>
</template>
