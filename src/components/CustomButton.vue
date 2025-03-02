<template>
  <UButton
    :class="customClass"
    :color="color"
    :variant="variant"
    :size="size"
    :icon="icon"
    :label="label"
    :disabled="disabled"
    :loading="loading"
    :block="block"
    :icon-right="iconRight"
    :icon-left="iconLeft"
    :loading-icon="loadingIcon"
  />
</template>

<script setup lang="ts">
defineProps<{
  customClass: string;
  color: string;
  variant: string;
  size: string;
  icon: string;
  label: string;
  disabled: boolean;
  loading: boolean;
  block: boolean;
  iconRight: boolean;
  iconLeft: boolean;
  loadingIcon: string;
}>();
</script>
