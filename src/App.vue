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
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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
