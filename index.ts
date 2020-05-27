import { addRoutes } from "@factor/api"
addRoutes({
  key: "blogRoutes",
  routes: [
    {
      path: "/",
      component: (): Promise<any> => import("./v-index.vue")
    },
    {
      path: "/entry/:permalink",
      component: (): Promise<any> => import("./v-single.vue")
    }
  ]
})
