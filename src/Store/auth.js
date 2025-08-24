import axios from "axios";
import toast from "../utils/toastMsg";
import catchError from "../utils/catch";

export default {
    namespaced:true,
    state: {
        token: null,
        user: null
    },
    getters: {
        authenticated(state) {
            return state.token && state.user
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },

        SET_USER(state, data) {
            state.user = data;
        },
    },
    actions: {
        async signIn({ dispatch }, credentials){
            let response = await axios
              .post("/Auth/Login", credentials)
              .then((result) => {
                if(result.status == 200){
                  const language = localStorage.getItem('language') || 'en'; // Default to 'en' if language is not set
                  const successMessage = language === 'ar' ? 'تم تسجيل الدخول بنجاح' : 'Log in Successfully';
                  toast.successToast(successMessage);
                  result.data.roles[0] === 'Admin' ? window.location.href = '/Admin' : window.location.href = '/';
                }
                return result;
              
              }).catch((e) => {
                catchError(e);
              });
              dispatch('attempt', response.data.token);
        },
        async register({ dispatch }, credit) {
            // store token
            let response = await axios
              .post("/Auth/register", credit)
              .then((result) => {
                const language = localStorage.getItem('language') || 'en'; // Default to 'en' if language is not set
                const successMessage = language === 'ar' ? 'تم التسجيل بنجاح' : 'Register Successfully';
                toast.successToast(successMessage)
                result.data.roles[0] == 'Admin' ? window.location.href = '/admin' : window.location.href = '/';
                return result;
              })
              .catch((e) => {
                  catchError(e);
              });
            let token = response.data.token;
            dispatch("attempt", token);
            // Cookies.set("JWT", token, { expires: 365 });
        },
        async attempt({ commit, state}, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }
            if (!state.token) {
                return
            }
            try {
                let response = await axios.get("/Auth/GetProfile");
                commit('SET_USER', response.data);
            } catch (e) {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            }
        },
        signOut({commit, state}) {
            return axios
              .get("/Auth/Logout")
              .then((response) => {
                if(response.status == 200){
                  const language = localStorage.getItem('language') || 'en'; // Default to 'en' if language is not set
                  const successMessage = language === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Log out Successfully';
                  toast.successToast(successMessage)
                }
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
              })
              .then((result) => {
                return result;
              })
              .catch((e) => {
                catchError(e);
              });
        }
    },
}