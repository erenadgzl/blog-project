<template>
  <div>
    <b-container fluid="sm">
      <b-card class="login-content" header="Login">
        <b-form class="sm-3" @reset="onReset">
          <b-form-row>
            <b-col>
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.password"
                  required
                  placeholder="Enter Password"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row>
            <b-col class="login-button-row">
              <b-button @click="onSubmit" type="button" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { router } from "../router";
import firebase from "firebase"
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        returnSecureToken: true
      }
    };
  },
  methods: {
    onSubmit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(function() {
          var user = firebase.auth().currentUser;
          localStorage.setItem("expires",user.b.c)
          localStorage.setItem("firebaseToken",user.b.b)
          router.push('/')
        })
        .catch(function() {
          // Handle Errors here.
          // ...
        });
    },
    onReset() {
      this.form.email = "";
      this.form.password = "";
    }
  }
};
</script>