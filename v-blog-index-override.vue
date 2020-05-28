<template>
  <div class="blog-entries">
    <div v-if="loading" class="posts-loading">
      <factor-spinner />
    </div>
    <div v-else-if="blogPosts.length > 0" class="post-index">
      <return-link v-if="tag || page > 1" />
      <div v-for="(post, pi) in blogPosts" :key="post._id" class="post">

        <featured-image :post-id="post._id" />

        <div class="post-content">

          <div v-if="post.category.length > 0" class="entry-categories">
            <factor-link
              v-for="(category, ci) in post.category"
              :key="ci"
              class="entry-category"
              :path="setting('blog.indexRoute')"
              :query="{ category }"
            >{{ category }}</factor-link>
          </div>
          <post-title :post-id="post._id" />

          <sub-title :post-id="post._id" />

          <factor-link
            :path="postLink(post._id)"
          > Read More &rarr; </factor-link>

          <author-date v-if="pi === 0" :post-id="post._id" />
          
        </div>
        
      </div>
      <pagination :post-type="postType" />
    </div>
    <div v-else class="posts-not-found">
      <div class="text">
        <div class="title">{{ notFoundTitle }}</div>
        <div class="sub-title">{{ notFoundSubTitle }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { factorSpinner, factorLink } from "@factor/ui"
import { setting, stored, postLink } from "@factor/api"
export default {
  components: {
    factorSpinner,
    factorLink,
    pagination: setting("blog.components.pagination"),
    returnLink: setting("blog.components.returnLink"),
    featuredImage: setting("blog.components.featuredImage"),
    postTitle: setting("blog.components.title"),
    subTitle: setting("blog.components.subtitle"),
    authorDate: setting("blog.components.authorDate"),
  },
  data() {
    return {
      postType: "blog",
      loading: false,
      notFoundTitle: setting("blog.notFound.title"),
      notFoundSubTitle: setting("blog.notFound.subTitle"),
      indexLayoutComponents: setting("blog.layout.index")
    }
  },
  metaInfo(this: any) {
    const title = this.tag ? `Tag "${this.tag}"` : setting("blog.metatags.index.title")

    const description = this.tag
      ? `Tag: ${this.tag}`
      : setting("blog.metatags.index.description")

    return {
      title,
      description
    }
  },
  computed: {
    tag(this: any) {
      return this.$route.params.tag || this.$route.query.tag || ""
    },
    page(this: any) {
      return this.$route.query.page || 1
    },
    index(this: any) {
      return stored(this.postType) || {}
    },
    blogPosts(this: any) {
      const { posts = [] } = this.index
      return posts
    }
  },

  methods: {
    setting,
    postLink
  }
}
</script>

<style lang="less" scoped>
.blog-entries {
  .post-index {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 2rem;

    @media (max-width: 900px) {
      display: block;
    }

    .post {
      border-radius: .35rem;
      transition: all .5s cubic-bezier(.165,.84,.44,1);

      &:hover{
        transform: translateY(-.25rem);
      }
      .post-content{
        padding: 2rem;
      }
      .featured-image{
        margin-bottom: 0;
        border-radius: .35rem .35rem 0 0;
      }
      .entry-categories{
        text-transform: uppercase;
        letter-spacing: 2px;    
        font-size: .8rem;
        margin-bottom: 1rem;
      }
      .entry-title{
        font-size: 1.4em;
      }
      .entry-subtitle{
        font-size: 1em;
      }

      .widget-author-date{
        margin-top: 2rem;
      }
      
      .entry-meta{
        display: block;
        margin-top: 1.5rem;
      }

      @media (min-width: 900px) {
        &:first-child{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
          grid-column-start: span 3;

          .featured-image{
            position: absolute;
            z-index: 0;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: .35rem;
          }

          .post-content{
            flex: none;
            align-self: stretch;
            width: 50%;
            z-index: 10;
            margin: 1rem;
            padding: 3rem;
            background: var(--color-bg-contrast);
            border-radius: .35rem;
          }
          .entry-title{
            font-size: 2em;
          }
          .entry-subtitle{
            font-size: 1.2em;
          }
        }
      }

      @media (max-width: 900px) {
        margin-bottom: 4rem;
      }
    }
    .pagination{
      grid-column-start: span 3;
    }
  }
  .posts-not-found,
  .posts-loading {
    min-height: 50vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 1.4em;
      font-weight: 600;
    }
    .sub-title {
      color: var(--color-text-secondary);
    }
  }
}
</style>
