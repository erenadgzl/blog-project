<template>

    <div>
    <b-container fluid="sm">
      <b-card class="login-content" header="Post List">
        
          
            <b-list-group>
        <b-list-group-item @click="postDetail(post.id)" button v-for="(post,index) in posts" :key="index">{{post.title}}</b-list-group-item>
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
    }
  },
  mounted: function () {
    this.getPost()
  }
};
</script>