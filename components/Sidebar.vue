<template>
    <div class="sidebar" :class="{ expanded: isExpanded }">
      <br><br>
      <h1>WEBSEC</h1>
      <ul>
        <li><router-link to="/" active-class="active">Home</router-link></li>
        <li><router-link to="/news" active-class="active">News</router-link></li>
        <li><router-link to="/extra" active-class="active">Extra</router-link></li>
        <li><router-link to="/about" active-class="active">About</router-link></li>
      </ul>
    </div>
    <div class="toggle-button" @click="toggleSidebar">
        <span v-if="isExpanded">⊂(X ‿ X)つ</span>
        <span v-else>⊂(◉‿◉)つ</span>
    </div>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        isExpanded: false
      };
    },
    methods: {
      toggleSidebar() {
        this.isExpanded = !this.isExpanded;
      }
    }
  };
</script>
