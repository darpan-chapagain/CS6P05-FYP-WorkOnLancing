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

/* Guest Component */
const Test2 = () =>
    import(
        "../components/pages/AdminDashboard.vue" /* webpackChunkName: "resource/js/components/login" */
    );
const Test = () =>
    import(
        "../components/pages/tests/imageUploadtest.vue" /* webpackChunkName: "resource/js/components/login" */
    );
const Login = () =>
    import(
        "../components/pages/Login.vue" /* webpackChunkName: "resource/js/components/login" */
    );
const Register = () =>
    import(
        "../components/pages/Register.vue" /* webpackChunkName: "resource/js/components/register" */
    );
const PostJob = () =>
    import(
        "../components/pages/PostJob.vue" /* webpackChunkName: "resource/js/components/register" */
    );
const Proposal = () =>
    import(
        "../components/pages/Proposal.vue" /* webpackChunkName: "resource/js/components/register" */
    );
const Proposals = () =>
    import(
        "../components/pages/Proposals.vue" /* webpackChunkName: "resource/js/components/register" */
    );
const Requests = () =>
    import(
        "../components/pages/Requests.vue" /* webpackChunkName: "resource/js/components/register" */
    );
const UserProfile = () =>
    import(
        "../components/pages/UserProfile.vue" /* webpackChunkName: "resource/js/components/register" */
    );
const ARequest = () =>
    import(
        "../components/pages/Arequest.vue" /* webpackChunkName: "resource/js/components/register" */
    );
const Application = () =>
    import(
        "../components/pages/Application.vue" /* webpackChunkName: "resource/js/components/register" */
    );
/* Guest Component */

/* Layouts */
const DashboardLayout = () =>
    import(
        "../components/Layouts/Dashboard.vue" /* webpackChunkName: "resource/js/components/layouts/dashboard" */
    );
/* Layouts */

/* Authenticated Component */
const EmployeeDashboard = () =>
    import(
        "../components/pages/EmployeeDashboard.vue" /* webpackChunkName: "resource/js/components/dashboard" */
    );
const UserDashboard = () =>
    import(
        "../components/pages/UserDashboard.vue" /* webpackChunkName: "resource/js/components/dashboard" */
    );
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
        name: "test",
        path: "/test",
        component: Test,
    },
    {
        name: "test",
        path: "/test2",
        component: Test2,
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
        path: "/job",
        component: AdminJob,
        props: true
    },
    {
        name: "adminUser",
        path: "/job",
        component: AdminUser,
        props: true
    },
    {
        name: "adminCategory",
        path: "/job",
        component: AdminCategory,
        props: true
    },
    {
        name: "adminSkill",
        path: "/job",
        component: AdminSkill,
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

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
//     if(to.meta.middleware=="guest"){
//         if(store.state.auth.authenticated){
//             console.log(store.state.auth.authenticated)
//             next({path:"/login"})
//         }
//         else{
//             next({path:"/login"})
//         }
//         next()
//     }else{
//         if(store.state.auth.authenticated){
//             next()
//         }else{
//             next({path:"/login"})
//         }
//     }
// })

export default router;
