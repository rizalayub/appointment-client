import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login"
import NewAppointment from "../components/Appointment/NewAppointment"

Vue.use(Router);

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
routes: [
    {
        path: '/',
        redirect: {
            name: `login`
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/new-appointment",
        name: "newappointment",
        component: NewAppointment
    },
    {
        path: "/new-appointment/:date",
        name: "newappointment-get-date",
        component: NewAppointment
    },
    {
        path: "/new-appointment/edit/:id",
        name: "newappointment-edit",
        component: NewAppointment
    },
    { 
        path: "/home", 
        name: `home`,
        component: Home 
    },
    { 
        path: "/about", 
        name: `about`,
        component: About 
    },
]
})