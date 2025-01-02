import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs-view",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job-view",
      component: JobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "job-edit-view",
      component: EditJobView,
    },
    {
      path: "/jobs/add",
      name: "add-job-view",
      component: AddJobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
