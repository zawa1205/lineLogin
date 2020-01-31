<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button class="logoutBtn" @click="logOut()">ログアウト</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss">
.home {
  .logoutBtn {
    display: block;
    margin: auto;
    width: 120px;
    height: 40px;
    background-color: white;
    color: #2c3e50;
    font-size: 16px;
    padding: 8px 0;
    border-color: rgb(201, 205, 210);
  }
}
</style>
