<template>
  <div class="signUpWrapper">
    <h1>ZAWA</h1>

    <div class="inputWrapper">
      <div class="in">
        <input class="input mInput" placeholder="メールアドレス" v-model="username"/>
        <input class="input pInput" placeholder="パスワード" v-model="password"/>
        <input class="input p2Input" placeholder="パスワード（確認用）" v-model="password2"/>
      </div>
      <button class="Btn" @click="signUp()">新規登録</button>
      <div class="alert">
        <p>{{ message }}</p>
        <p class="created">{{ created }}</p>
      </div>
      <router-link to="/signIn">
        <button class="Btn loginBtn">ログイン画面</button>
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
      password2: '',
      message: '',
      created: ''
    }
  },
  methods: {
    mail_vali() {
      if( this.username.match(/.+@.+\..+/) == null ) {
        this.message = '※ 有効なメールアドレスではありません。'
        return true
      } else {
        return false
      }
    },
    pass_vali() {
      if(this.password.length < 6) {
        this.message = '※ パスワードは6文字以上です。'
        return true
      }
      else return false
    },
    pass12_vali() {
      if(this.password != this.password2) {
        this.message = '※ パスワードが確認用パスワードと一致しません。'
        return true
      }
      else return false
    },
    signUp() {
      if( this.mail_vali() ) return
      if( this.pass_vali() ) return
      if( this.pass12_vali() ) return
      this.created = 'しばらくお待ちください。'
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => { // eslint-disable-line
          // alert('Create account: ', user.email)
          this.created = '登録が完了しました。'
        })
        .catch(error => {
          alert(error.message)
        })
      
      this.username = ''
      this.password = ''
      this.password2 = ''
      this.message = ''
    }
  }
}
</script>

<style lang="scss">
.signUpWrapper {

  

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
        border-top: 1px solid rgb(201, 205, 210);
        border-bottom: 1px solid rgb(201, 205, 210);
      }
      .pInput {
        border-bottom: 1px solid rgb(201, 205, 210);
      }
    }

    .alert {
      height: 18px;

      p {
        font-size: 12px;
        text-align: left;
        color: red;
      }

      .created {
        color: #2c3e50;
        font-size: 16px;
        text-align: center;
      }
    }

    .Btn {
      color: #2c3e50;
      font-size: 16px;
      margin-top: 6px;
      background-color: white;
      padding: 8px 0;
      width: 100%;
      border-color: rgb(201, 205, 210);
    }

    .loginBtn {
      margin-top: 50px;
    }
  }
}
</style>
