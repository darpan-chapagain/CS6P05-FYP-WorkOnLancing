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
import Rating from '../components/pages/Rating.vue';
import EmployeePortal from '../components/pages/EmployeePortal.vue'
/* Guest Component */
const Test2 = () =>
    import(
        "../components/pages/EmployeePortal.vue" /* webpackChunkName: "resource/js/components/login" */
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
        name: "login",
        path: "/login",
        component: Login,
        beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated']){
                return next({
                    name: 'dashboard'
                })
            }
            next()
        }
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
            if (store.getters['auth/authenticated']){
                return next({
                    name: 'dashboard'
                })
            }
            next()
        }
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
                component: EmployeeDashboard,
                meta: {
                    middleware: [auth, admin],
                },
            },
        ]
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
        
    },{
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
        props: true
        
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
    }
];

var router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: Routes,
});

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })

})

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
