<template>
  <div>
    <b-container fluid="sm">
      <b-card class="login-content" header="Register">
        <b-form class="sm-3" @reset="goBack">
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
              <b-button @click="createUser" type="button" variant="primary">Register</b-button>
              <b-button type="reset" variant="outline-primary">Go Back</b-button>
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
        password: ""
      }
    };
  },
  methods: {
    createUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(function() {
            router.push("/login")
        })
        .catch(function() {
          // Handle Errors here.
          // ...
        });
    },
    goBack() {
      router.push("/login")
    }
  }
};
</script>