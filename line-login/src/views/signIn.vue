<template>
  <div class="signInWrapper">
    <h1>ZAWA</h1>

    <div class="inputWrapper">
      <div class="loginTitle">
        <h2 class="mlogin">メールログイン</h2>
        <h2 class="qlogin">QRコードログイン</h2>
      </div>
      <div class="in">
        <input class="input mInput" placeholder="メールアドレス" v-model="username"/>
        <input class="input pInput" placeholder="パスワード" v-model="password"/>
      </div>
      <button class="loginBtn" @click="signIn()">ログイン</button>
      <p class="alert">{{ message }}</p>
      <p class="plogin">電話番号ログイン ></p>
      <div class="autoLogin">
        <input type="checkbox"/>
        <label class="autoLabel">自動ログイン</label>
      </div>
      <router-link to="/signUp">
        <button class="loginBtn">新規登録</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    signIn() {
      this.message = ''
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => { // eslint-disable-line
          // alert('Success!')
          this.$router.push('/')
        },
        err => { // eslint-disable-line
          this.message = 'メールアドレスまたはパスワードが違います。'
        }
      )
    }
  }
}
</script>

<style lang="scss">
.signInWrapper {
  width: 320px;
  margin: auto;

  h1 {
    color: rgb(68, 165, 33);
    font-weight: 900;
    margin-top: 80px;
    font-size: 50px;
  }

  .inputWrapper {
    width: 90%;
    margin: auto;

    .loginTitle {
      width: 100%;
      h2 {
        width: 50%;
        margin: 0 auto;
        display: inline-block;
        font-size: 10px;
        font-weight: normal;
        background-color: white;
        border: 1px solid rgb(201, 205, 210);
        margin-bottom: 0;
        padding: 8px 0;
        box-sizing: border-box;
      }
      .mlogin {
        border-right: 0 solid rgb(201, 205, 210);
      }
      .qlogin {
        background-color: rgb(236, 236, 236);
      }
    }

    .in {
      border-right: 1px solid rgb(201, 205, 210);
      border-left: 1px solid rgb(201, 205, 210);
      border-bottom: 1px solid rgb(201, 205, 210);

      input {
        border: 0;
      }

      .input {
        padding: 8px;
        min-width: 100%;
        display: inline;
        margin: auto;
        box-sizing: border-box;
        border-color: rgb(201, 205, 210);
      }

      .mInput {
        border-bottom: 1px solid rgb(201, 205, 210);
      }
    }

    .plogin {
      font-size: 12px;
    }

    .alert {
      color: red;
      font-size: 12px;
    }

    .loginBtn {
      color: #2c3e50;
      font-size: 16px;
      margin-top: 6px;
      background-color: white;
      padding: 8px 0;
      width: 100%;
      border-color: rgb(201, 205, 210);
    }

    .autoLogin {
      text-align: left;
      font-size: 12px;
    }
    
  }
}
</style>
