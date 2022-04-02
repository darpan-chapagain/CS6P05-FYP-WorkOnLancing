import axios from "axios";
import { attempt } from "lodash";
import router from "../router";

export default {
    namespaced: true,

    state: {
        jobRequest: null,
        jobProposals: null,
    },

    getters: {
        job_Request(state) {
            return state.jobRequest;;
        },
        job_Proposal(state) {
            return state.jobProposals;
        }
    },

    mutations: {
        SET_REQUESTS(state, request) {
            state.jobRequest = request;
        },
        SET_PROPOSALS(state, proposals) {
            state.jobProposals = proposals;
        }
    },
    actions: {
        async fetchRequest({ dispatch }, token ) {
            let res = await axios({
                method: 'get',
                url: "user/job/requests",
                headers: { Authorization: `Bearer ${token}` }
            });

            const data = await res.data;

            if(data.message) {
                return dispatch("setRequest", null);
            }
            return dispatch("attemptRequest", data);
            
        },
        async fetchProposals({ dispatch }, token ) {
            let res = await axios({
                method: 'get',
                url: "employee/offers",
                headers: { Authorization: `Bearer ${token}` }
            });

            const data = await res.data;

            if(data.message) {
                console.log(data.message);
                return dispatch("setProposals", null);
            }
            console.log(data);
            return dispatch("attemptProposal", data);
        },
        async attemptRequest({commit}, data) {
            commit("SET_REQUESTS", data);
        },

        async setRequest({commit}, data) {
            commit("SET_REQUESTS", null);
        },
        async attemptProposal({commit}, data) {
            commit("SET_PROPOSALS", data);
        },

        async setProposals({commit}, data) {
            commit("SET_PROPOSALS", null);
        }
    },
};
