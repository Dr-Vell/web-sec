<template>
    <div class="sidebar" :class="{ expanded: isExpanded }">
      <br><br>
      <h1>WEBSEC</h1>
      <ul>
        <h2><router-link to="/">Home</router-link></h2>
        <h2><router-link to="/news">News</router-link></h2>
        <h2><router-link to="/extra">Extra</router-link></h2>
        <h2><router-link to="/about">About</router-link></h2>
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
  
<style>

  body{
    background: rgb(32, 32, 32);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 150px;
    background-color: rgb(20, 20, 20);
    padding: 20px;
    transition: transform 0.2s ease;
    transform: translateX(0); /* Añade esta propiedad */
    color: rgb(240, 240, 240);
    
  }
  
  .expanded {
    transform: translateX(-100%);
  }
  
  .toggle-button {
    position: fixed;
    top: 20px; 
    left: 20px; 
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    padding: 5px;
    background-color: rgb(209, 124, 13);
    border-radius: 5px;
    z-index: 1000; 
    max-width: 100px;
    color: rgb(240, 240, 240);
  }
  
  .toggle-button:hover {
    background-color: rgb(253, 165, 49);
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h2 {
    margin-bottom: 10px;
  }
</style>
