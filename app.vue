<script setup>
  import { ref } from "vue";

  const visible = ref(false);
</script>


<template>
  <div>
    <Head><Title>WEBSEC</Title></Head>
    <Sidebar />
    <NuxtPage />
  </div>
</template>
