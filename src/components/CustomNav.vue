<template>
  <UNavigationMenu
    :items="items"
    class="w-full bg-neutral-800 p-3 justify-between"
  />
</template>

<script setup lang="ts">
const items = [
  [
    {
      label: "Home",
      icon: "i-lucide-home",
      to: "/",
    },
    {
      label: "About",
      icon: "i-lucide-info",
      to: "/about",
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      to: "https://github.com/nuxt/ui",
      target: "_blank",
    },
    {
      label: "Help",
      icon: "i-lucide-circle-help",
      disabled: true,
    },
  ],
];
</script>
