<template>
  <div class="page-header">
    <h1 v-if="title">{{ title }}</h1>
    <h3 v-if="subTitle">{{ subTitle }}</h3>
    <div v-if="link" class="actions">
      <factor-link :path="link" btn="primary">{{ linkText }}</factor-link>
    </div>
  </div>
</template>
<script lang="ts">
import { factorLink } from "@factor/ui"
export default {
  components: { factorLink },
  props: {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    link: { type: String, default: "" },
    linkText: { type: String, default: "" }
  }
}
</script>
<style lang="postcss" scoped>
.page-header {
  text-align: center;
  line-height: 1.1;
  padding: 1em;
  margin: 2em;

  h1 {
    font-size: 1.7em;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: 1.3em;
    color: var(--color-text-secondary);
  }
  .actions {
    margin: 2em 0;
    .factor-link {
      margin: 0 0.5rem;
    }
  }
}
</style>
