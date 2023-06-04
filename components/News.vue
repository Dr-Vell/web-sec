<script setup>

  const {
    data: news,
    pending,
  } = await useAsyncData("news", () =>
    $fetch(
      `https://newsapi.org/v2/everything?q=ciberseguridad&apiKey=d7d1b168421d46baaa9cfd9ae688e744`
    )
  );

</script>

<template>
  <div class="contenido">
    <h1 class="contenido-titulo">News</h1> 
    <template v-if="pending">Loading news...</template>
    <template v-else>
      <template v-if="news">
        <div v-for="articulo in news.articles" :key="articulo.url" class="articulo">
          <img :src="articulo.urlToImage" alt="Artículo imagen" class="articulo-imagen">
          <div class="articulo-info">
            <a :href="articulo.url" target="_blank" class="articulo-titulo">{{ articulo.title }}</a>
            <p class="articulo-autor">Por {{ articulo.author }} - {{ articulo.publishedAt }}</p>
          </div>
        </div>
      </template>
      <template v-else>
        <p>API call limit exceeded.</p>
        <p>Please wait until tomorrow to see more.</p>
        <p>We apologize for any inconvenience.</p>

      </template>
    </template>
  </div>
</template>

