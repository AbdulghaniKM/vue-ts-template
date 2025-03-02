<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// Router components are globally registered by vue-router
</script>

<style>
nav {
  padding: 1rem;
}

nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-active {
  color: #42b983;
}
</style>
