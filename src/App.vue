<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppFooter from './components/Footer'
import firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDlvwL0s1MdyXVlu7DVnzONVa87YD2WdFI",
    authDomain: "igneous-tracer-250513.firebaseapp.com",
    databaseURL: "https://igneous-tracer-250513.firebaseio.com",
    projectId: "igneous-tracer-250513",
    storageBucket: "igneous-tracer-250513.appspot.com",
    messagingSenderId: "837296512959",
    appId: "1:837296512959:web:47a578de79ff4e524a8b0a",
    measurementId: "G-82TFTJBTQS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  mounted(){
  this.checkAuthExpires();
  }, 
  watch: {
    $route(to) {
      if(to.path!='/login' && to.path!='/register'){
        this.checkAuthExpires()
      }
    } 
  },
  methods: {
    checkAuthExpires() {
        this.currentDate = Date.now();
        if(this.$route.path!="/login" && this.$route.path!="/register") {
            if ((localStorage.getItem("expires") == null || this.currentDate > localStorage.getItem("expires"))) {
            this.logOut();
            }
        }
    },
    logOut(){
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }, function() {
        // An error happened.
      });
      localStorage.clear();
      this.$router.push('/login')
      window.location.reload();
    }
  }
}
</script>

<style>
@import url('./assets/style.css');
</style>
