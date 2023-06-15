<template>
  <div class="contenido">
    <h1 class="contenido-titulo">News</h1> 
    <template v-if="pending">Loading news...</template>
    <template v-else>
      <template v-if="news.response.docs.length > 0">
        <div v-for="articulo in news.response.docs" :key="articulo.web_url" class="articulo">
          <img :src="getImagenUrl(articulo)" alt="Artículo imagen" class="articulo-imagen">
          <div class="articulo-info">
            <a :href="articulo.web_url" target="_blank" class="articulo-titulo">{{ articulo.abstract }}</a>
            <p class="articulo-autor"> {{ articulo.byline.original }} - {{ obtenerFecha(articulo.pub_date) }}</p>
          </div>
        </div>
      </template>
      <template v-else-if="news.response.docs.length <= 0">
        <p>No news found today. :c</p>
      </template>
      <template v-else>
        <p>API call limit exceeded.</p>
        <p>Please wait until tomorrow to see more.</p>
        <p>We apologize for any inconvenience.</p>
      </template>
    </template>
  </div>
</template>

<script setup>
  const runtimeConfig = useRuntimeConfig(); 
  const news_link = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cybersecurity&sort=newest&api-key=`+ runtimeConfig.newsApiKey;
  const { data: news, pending } = await useAsyncData("news", () =>
    $fetch(
      news_link
    )
  );

  const getImagenUrl = (articulo) => {
    if (articulo.multimedia && articulo.multimedia.length > 0 && articulo.multimedia[0].url) {
      return `https://static01.nyt.com/${articulo.multimedia[0].url}`;
    } else {
      // URL de imagen por defecto
      return '/news.png';
    }
  };

  const obtenerFecha = (pubDate) => {
    return pubDate.substring(0, 10);
  };
</script>
