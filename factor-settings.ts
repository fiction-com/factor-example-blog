export default {
  blog: {
    disableAutoRoutes: true,
    indexRoute: "/",
    postRoute: "/entry",
    categories: [
      "drama",
      "horror",
      "action",
      "science-fiction",
      "comedy",
      "adventure",
      "family",
      "crime",
      "thriller",
      "romantic-comedy"
    ],
    // layout: {
    //   index: ["featuredImage", "title", "subtitle", "meta"],
    //   single: ["returnLink", "title", "meta", "entry", "social", "authorBio"],
    //   meta: ["authorDate"]
    // },
    components: {
      blogIndex: (): Promise<any> => import("./v-blog-index-override.vue"),
      blogSingle: (): Promise<any> => import("./v-blog-single-override.vue")
    }
  }
}
