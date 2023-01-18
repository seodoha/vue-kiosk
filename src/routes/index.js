import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView";
import OrderView from "@/views/OrderView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: MainView,
        },
    ],
});
