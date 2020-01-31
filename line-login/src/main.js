import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOj8GCX0pLgjHCII6DOaNahftd4mPhELw",
  authDomain: "linelogin-zawa.firebaseapp.com",
  databaseURL: "https://linelogin-zawa.firebaseio.com",
  projectId: "linelogin-zawa",
  storageBucket: "linelogin-zawa.appspot.com",
  messagingSenderId: "443970595859",
  appId: "1:443970595859:web:749fe67f5c2b42c460e3e6",
  measurementId: "G-RT99182X2D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
