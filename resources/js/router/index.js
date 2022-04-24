import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import auth from "./middleware/auth";
import user from "./middleware/user";
import employee from "./middleware/employee";
import guest from "./middleware/guest";
import admin from "./middleware/admin";
import middlewarePipeline from "./middlewarePipeline";

Vue.use(VueRouter);

import JobRequest from "../components/pages/JobRequests.vue";
import UserPortal from "../components/pages/UserPortal.vue";
import Rating from "../components/pages/Rating.vue";
import EmployeePortal from "../components/pages/EmployeePortal.vue";
import JobEdit from "../components/pages/JobEdit.vue";
import Blog from "../components/pages/Blog.vue";
import Chat from "../components/pages/Chat.vue";
import ChatRoom from "../components/pages/Chat/chatRoom.vue"
import Home from "../components/pages/Home.vue";
import AdminDashboard from "../components/pages/AdminDashboard.vue";
import AdminJob from "../components/pages/AdminPage/ManageJob.vue"
import AdminUser from "../components/pages/AdminPage/ManageUser.vue"
import AdminCategory from "../components/pages/AdminPage/ManageCategory.vue";
import AdminSkill from "../components/pages/AdminPage/ManageSkill.vue";
import UserEdit from "../components/pages/UserEdit.vue"
import AdminBadge from "../components/pages/AdminPage/Manage Badge.vue";
import filterTest from '../components/pages/filterTest.vue'
import Login from "../components/pages/Login.vue" 
import Register from "../components/pages/Register.vue"
import PostJob from "../components/pages/PostJob.vue" 
import Proposal from "../components/pages/Proposal.vue"
import Proposals from "../components/pages/Proposals.vue";
import Requests from "../components/pages/Requests.vue";
import UserProfile from "../components/pages/UserProfile.vue";
import ARequest from "../components/pages/Arequest.vue";
import Application from "../components/pages/Application.vue";
import DashboardLayout from "../components/Layouts/Dashboard.vue";
import EmployeeDashboard from "../components/pages/EmployeeDashboard.vue";
import UserDashboard from "../components/pages/UserDashboard.vue";

/* Authenticated Component */
function requireAuth(to, from, next) {}

const Routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "login",
        path: "/login",
        component: Login,
        beforeEnter: (to, from, next) => {
            if (store.getters["auth/authenticated"]) {
                return next({
                    name: "dashboard",
                });
            }
            next();
        },
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        beforeEnter: (to, from, next) => {
            if (store.getters["auth/authenticated"]) {
                return next({
                    name: "dashboard",
                });
            }
            next();
        },
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardLayout,
        meta: {
            middleware: [auth],
        },
        children: [
            {
                name: "dashboard.user",
                path: "dashboard/user",
                component: UserDashboard,
                meta: {
                    middleware: [auth, user],
                },
            },
            {
                name: "dashboard.employee",
                path: "dashboard/employee",
                component: EmployeeDashboard,
                meta: {
                    middleware: [auth, employee],
                },
            },
            {
                name: "dashboard.admin",
                path: "dashboard/admin",
                component: AdminDashboard,
                meta: {
                    middleware: [auth, admin],
                },
            },
        ],
    },
    {
        name: "postJob",
        path: "/post/job",
        component: PostJob,
    },
    {
        name: "proposal",
        path: "/proposal",
        component: Proposal,
        meta: {
            middleware: [auth],
        },
    },
    {
        name: "offer",
        path: "/job/offers",
        component: Proposals,
        meta: {
            middleware: [auth],
        },
    },
    {
        name: "requests",
        path: "/requests",
        component: Requests,
        meta: {
            middleware: [auth],
        },
    },
    {
        name: "profile",
        
        path: "/profile/:id/",
        component: UserProfile,
        props: true,
    },
    {
        name: "request",
        path: "/request",
        component: ARequest,
        meta: {
            middleware: [auth],
        },
    },
    {
        name: "application",
        path: "/application",
        component: Application,
        meta: {
            middleware: [auth],
        },
        props: true,
    },
    {
        name: "jobRequest",
        path: "/job/requests",
        component: JobRequest,
        props: true,
    },
    {
        name: "userPortal",
        path: "/user/Portal",
        component: UserPortal,
        props: true,
    },
    {
        name: "employeePortal",
        path: "/employee/Portal",
        component: EmployeePortal,
        props: true,
    },
    {
        name: "userRating",
        path: "/user/rating",
        component: Rating,
        props: true,
    },
    {
        name: "jobEdit",
        path: "/job/edit",
        component: JobEdit,
        props: true,
    },
    {
        name: "userEdit",
        path: "/user/edit",
        component: UserEdit,
        props: true,
    },
    {
        name: "blog",
        path: "/blog/:id",
        component: Blog,
        props: true,
    },
    {
        name: "chat",
        path: "/chat",
        component: Chat,
        props: true,
    },
    {
        name: "ChatRoom",
        path: "/chatRoom",
        component: ChatRoom,
        props: true
    },
    {
        name: "adminJob",
        path: "/admin/job",
        component: AdminJob,
        props: true
    },
    {
        name: "adminUser",
        path: "/admin/user",
        component: AdminUser,
        props: true
    },
    {
        name: "adminCategory",
        path: "/admin/category",
        component: AdminCategory,
        props: true
    },
    {
        name: "adminSkill",
        path: "/admin/skill",
        component: AdminSkill,
        props: true
    },
    {
        name: "adminBadge",
        path: "/admin/badge",
        component: AdminBadge,
        props: true
    }
];

var router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    
    routes: Routes,
    
    
});


router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next();
    }
    const middleware = to.meta.middleware;

    const context = {
        to,
        from,
        next,
        store,
    };

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1),
    });
});


export default router;
