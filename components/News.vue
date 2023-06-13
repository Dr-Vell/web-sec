<template>
  <div class="contenido">
    <h1 class="contenido-titulo">News</h1> 
    <template v-if="pending">Loading news...</template>
    <template v-else>
      <template v-if="news">
        <div v-for="articulo in news.response.docs" :key="articulo.web_url" class="articulo">
          <img :src="getImagenUrl(articulo)" alt="Artículo imagen" class="articulo-imagen">
          <div class="articulo-info">
            <a :href="articulo.web_url" target="_blank" class="articulo-titulo">{{ articulo.abstract }}</a>
            <p class="articulo-autor"> {{ articulo.byline.original }} - {{ articulo.pub_date }}</p>
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

<script setup>
  const { data: news, pending } = await useAsyncData("news", () =>
    $fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cybersecurity&sort=newest&api-key=AvXxhlTigBmQ6QMjJ9aVCugACXUx83Aj`
    )
  );

  const getImagenUrl = (articulo) => {
    if (articulo.multimedia && articulo.multimedia.length > 0 && articulo.multimedia[0].url) {
      return `https://static01.nyt.com/${articulo.multimedia[0].url}`;
    } else {
      // URL de imagen por defecto
      return '/about.png';
    }
  };
</script>
