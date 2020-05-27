<template>
  <div class="demo">
    <demo-header />
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  components: { demoHeader: () => import("./header.vue") }
}
</script>

<style lang="postcss">
html.factor-app {
  --color-primary: pink;
  --color-bg: #0d051f;
  --color-text: #fff;
  --color-text-secondary: #a799de;
  --color-bg-contrast: #210f4a;
  --color-border: #4b3877;
  --color-primary: #ffc000;
  background-color: var(--color-bg);
  color: var(--color-text);
}
</style>
