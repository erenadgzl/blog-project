<template>
    <div>
    <b-container fluid="sm">
      <b-card class="login-content" header="Post List">
        <b-list-group  v-for="(post,index) in posts" :key="index">
          <b-list-group-item @click="postDetail(post.id)" button >{{post.title}}</b-list-group-item>
          <b-icon @click="deletePost(post.id)" style="height:30px; background-color: #ff4d4d; width:100%; color: #ffe6e6;border-radius: 0 0 10px 10px; margin-bottom:10px; cursor:pointer" icon="trash"></b-icon>
        </b-list-group>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase"
import { router } from "../../router";

export default {
  data() {
    return {
      posts : []
    };
  },
  methods: {
    async getPost(){
      this.posts=[]
        var posts=[]
        var postsRef = firebase.database().ref('posts');
        await postsRef.on('value',  (snapshot) => {
          snapshot.forEach(function(childSnapshot) {
            var item = { id :childSnapshot.key , title: childSnapshot.val().title }
            posts.push(item)
          });
      })
      this.posts=posts
    },
    postDetail(id){
      router.push("/post/"+id)
    },
    async deletePost(id){
      this.posts=[]
      var postsRef = firebase.database().ref('posts/' + id);
      await postsRef.remove()
        .then(function() {
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });  
        this.getPost()
    }
  },
  mounted: function () {
    this.getPost()
  }
};
</script>