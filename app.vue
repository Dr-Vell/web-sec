<script setup>
  import { ref } from "vue";

  const visible = ref(false);
</script>


<template>
  <div>
    <Sidebar />
    <NuxtPage />
  </div>
</template>
