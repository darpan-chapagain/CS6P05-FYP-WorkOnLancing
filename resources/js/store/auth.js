import axios from "axios";
import router from "../router";

export default {
    namespaced: true,

    state: {
        token: null,
        user: null,
        role: null,
        authenticate: false,
    },

    getters: {
        user(state) {
            return state.user;
        },

        getRole(state) {
            return state.role;
        },
        authenticated(state) {
            return state.authenticate;
        },
        getToken(state) {
            return state.token;
        },
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_ROLE(state, role) {
            state.role = role;
        },
        SET_AUTHENTICATED(state, data) {
            state.authenticate = data;
        },
    },
    actions: {
        async login({ dispatch }, credentials) {
            await axios.get("/sanctum/csrf-cookie");
            let response = await axios.post("/login", credentials);
            if(response.data.message == "Unauthorised"){
                return "Please enter valid credentials";
            }
            return dispatch("attempt", response.data.token).then(() =>
                router.push({ name: "dashboard" })
            );
        },
        async register(_, credentials) {
            let response = await axios({
                method: "post",
                url: "/register",
                data: credentials,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then(response => { 
                console.log(response, 'res')
                console.log(response.status)
                return true;
            })
            .catch(error => {
                console.log(error.response, 'err')
                console.log(error.response.status)
                return false;
            });
            if(response){
                console.log(response, 'res');
                return true;
            }else{
                console.log(response);
                return false;
            }
            
        },
        async attempt({ commit }, token) {
            commit("SET_TOKEN", token);

            try {
                let response = await axios.get("/me/data");
                commit("SET_USER", response.data.user);
                commit("SET_ROLE", response.data.role);
                commit("SET_AUTHENTICATED", true);
            } catch (e) {
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
                commit("SET_ROLE", null);
                commit("SET_AUTHENTICATED", false);
            }
        },
        signOut({ commit }) {
            return axios.post("/logout").then(() => {
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
                commit("SET_ROLE", null);
                commit("SET_AUTHENTICATED", false);
                localStorage.removeItem("token");
            });
        },
    },
};
