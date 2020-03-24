<template>
  <div>
    <b-container fluid="sm">
      <b-card class="post-add-content" header="Post Detail">
        <b-form class="sm-3" @reset="onReset">
          <b-form-row>
            <b-col>
              <b-form-group
                id="input-group-1"
                label="Title:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="post.title"
                  type="text"
                  required
                  placeholder="Enter title"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-row>
    <b-col sm="2">
      <label for="textarea-auto-height">Post Content:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-auto-height"
        rows="10"
        max-rows="20"
        v-model="post.content"
      ></b-form-textarea>
    </b-col>
  </b-row>
          <b-form-row>
            <b-col class="login-button-row">
              <b-button @click="onSubmit" type="button" variant="success">Update</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      post: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    onSubmit(){
      firebase
        .database()
        .ref('posts/'+this.id)
        .update(this.post);
    },
    async getPostDetail(id){
        var post=null
        var postsRef = firebase.database().ref('posts/' + id);
        await postsRef.once('value').then(function(snapshot) {
            post = snapshot.val()
        });
        this.post = post
    },
    onReset() {
      this.post.title = "";
      this.post.content = "";
    }
  },
  mounted: function () {
    this.getPostDetail(this.$route.params.id)
  }
};
</script>