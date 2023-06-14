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
    <div class="social-media">
      <a target="_blank" href="https://www.youtube.com/@WEBSEC-Oficial/featured"><img class="social-media-logo" src="/logo-yt.png" alt="Youtube Link"></a>
      <a target="_blank" href="https://twitter.com/WEBSEC_Oficial"><img class="social-media-logo" src="/logo-tt.png" alt="Twitter Link"></a>
      <a target="_blank" href="https://www.facebook.com/profile.php?id=100093410209687"><img class="social-media-logo" src="/logo-fb.png" alt="Facebook Link"></a>
    </div>
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
