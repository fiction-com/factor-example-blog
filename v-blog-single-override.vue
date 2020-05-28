<template>
  <div class="single-entry">
    <div v-if="!isEmpty(post)">
      <return-link />

      <post-title :post-id="post._id" />

      <sub-title :post-id="post._id" />

      <post-meta :post-id="post._id" />

      <featured-image :post-id="post._id" />

      <post-entry :post-id="post._id" />

      <post-social :post-id="post._id" />

      <post-author :post-id="post._id" />
    </div>
    <factor-error-404 v-else />    
  </div>
</template>
<script lang="ts">
import { factorError404 } from "@factor/ui"
import {
  isEmpty,
  setting,
  stored,
  titleTag,
  descriptionTag,
  shareImage,
} from "@factor/api"

export default {
  components: { 
    returnLink: setting("blog.components.returnLink"),
    featuredImage: setting("blog.components.featuredImage"),
    postTitle: setting("blog.components.title"),
    subTitle: setting("blog.components.subtitle"),
    postMeta: setting("blog.components.meta"),
    postEntry: setting("blog.components.entry"),
    postSocial: setting("blog.components.social"),
    postAuthor: setting("blog.components.authorBio"),
    factorError404 
    },
  data() {
    return {}
  },
  metaInfo() {
    return {
      title: titleTag(this.post._id),
      description: descriptionTag(this.post._id),
      image: shareImage(this.post._id),
    }
  },
  computed: {
    post() {
      return stored("post") || {}
    },
  },
  methods: { isEmpty, setting },
}
</script>

<style lang="less">
.plugin-blog {
  .single-entry {
    padding: 2rem 0;
    .return-link,
    .entry-title,
    .entry-subtitle,
    .entry-meta,
    .post-entry,
    .social-share,
    .author-bio{
      max-width: 44rem;
      margin: 0 auto;
      padding: 1rem;
    }

    .entry-title{
      font-size: 3em;
    }

    .featured-image{
      max-width: 64rem;
      height: 24em;
      margin: 3rem auto;

      @media (max-width: 900px) {
        border-radius: 0;
      }
    }

    .social-share{
      width: fit-content;
    }

    .author-bio{
      .author-card .text{
        position: relative;
        padding: 2rem;
        background: var(--color-bg-contrast);
        border-radius: 8px;
        &:after {
            content: "";
            display: block;
            position: absolute;
            left: -6px;
            top: 35px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 6px 6px 6px 0;
            border-color: transparent var(--color-bg-contrast) transparent transparent;
        }
      }
    }
  }
}
</style>
