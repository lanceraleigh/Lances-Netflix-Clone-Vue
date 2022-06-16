import { createStore } from "vuex";

const store = createStore({
  state: {
    myList: [],
    userIsAuthorized: true,
    justLoggedIn: false,
    user: null,
  },

  mutations: {
    // Auth mutations
    setUserIsAuthorized(state, payload) {
      state.userIsAuthorized = payload;
    },
    setJustLoggedIn(state) {
      state.justLoggedIn = true;
    },
    setUser(state, payload) {
      state.user = payload;
      localStorage.setItem("userData", JSON.stringify(payload));
    },

    // Mylist mutations
    addToMyList(state, payload) {
      if (localStorage.getItem("myList") === null) {
        localStorage.setItem("myList", JSON.stringify(payload));
      } else {
        let myListLocalStorage = [];
        myListLocalStorage.push(payload);
        myListLocalStorage = myListLocalStorage.concat(
          JSON.parse(localStorage.getItem("myList"))
        );
        localStorage.setItem("myList", JSON.stringify(myListLocalStorage));
      }
    },
    removeFromMyList(state, payload) {
      const localStorageList = JSON.parse(localStorage.getItem("myList"));
      const idIndex = localStorageList
        .map((object) => object.id)
        .indexOf(payload);
      localStorageList.splice(idIndex, 1);
      localStorage.setItem("myList", JSON.stringify(localStorageList));
    },
  },
  actions: {
    auth0login(context) {
      context.state.auth0.authorize();
    },
  },
});
//   ADD_TO_MY_LIST(state, payload) {
//    state.myList.push(payload);
//   },
//   REMOVE_FROM_MY_LIST(state, payload) {
//    for (let i = 0; i < state.myList.length; i++) {
//     if (state.myList[i] === payload) {
//      state.myList.splice(i, 1);
//     }
//    }
//   }
//  }
// });

export default store;
