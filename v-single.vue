<template>
  <div class="demo-blog-single">
    <standard-blog-single />
  </div>
</template>
<script lang="ts">
import { setting } from "@factor/api"
import { standardBlogSingle } from "@factor/plugin-blog"
export default {
  components: {
    standardBlogSingle
  },

  metaInfo() {
    return {
      title: "Blog Demo",
      description: "Blog plugin demo"
    }
  },
  methods: { setting }
}
</script>
<style lang="less">
</style>
