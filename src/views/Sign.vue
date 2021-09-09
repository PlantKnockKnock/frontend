<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 purple--text text--darken-4"
                        >Sign in to SPMS</h1>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form @submit.prevent="signIn" id="Login">
                          <v-text-field
                            v-model="emailin"
                            label="Email"
                            name="Email"
                            type="text"
                            color="purple darken-4"
                          />
                          <v-text-field
                            v-model="passwordin"
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="purple darken-4"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Forgot your password ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="purple darken-4" dark type="submit" form="Login">SIGN IN</v-btn>
                      </div>
                      <div class="text-center mt-3">
                        <v-text>   </v-text>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="purple darken-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5
                          class="text-center"
                        >Enter your personal details and start journay with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill height">
                    <v-col cols="12" md="4" class="purple darken-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                          class="text-center"
                        >To Keep connected with us please login with your personnel info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark>Sign in</v-btn>
                      </div>
                      <div class="text-center mt-3">
                        <v-text>   </v-text>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 purple--text text--darken-4">Create Account</h1>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form @submit.prevent="signUp" id="register">
                          <v-text-field
                            v-model ="nickname"
                            label="NickName"
                            name="NickName"
                            type="text"
                            color="purple darken-4"
                          />
                          <v-text-field
                            v-model ="email"
                            label="Email"
                            name="Email"
                            type="text"
                            color="purple darken-4"
                          />

                          <v-text-field
                            v-model="password"
                            id="password"
                            label="Password"
                            name="Password"
                            type="password"
                            color="purple darken-4"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="purple darken-4" dark type="submit" form="register">SIGN UP</v-btn>
                      </div>
                      <div class="text-center mt-3">
                        <v-text>   </v-text>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import crypto from 'crypto'
import axios from 'axios'

export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  ,
  },
  methods : {
    signUp() {
      let sha = crypto.createHash("sha512");
      
      let nickname = this.nickname
      let email = this.email
      let password = sha.update(this.password).digest("base64");

      const user = {
        user_id : email,
        user_pw : password,
        user_nickname : nickname
      };

      axios.post('/auth/register',user).then(response => {
        console.log(response.data);
        console.log(response.data.access_token);
        localStorage.access_token = response.data.access_token;
        console.log("회원가입 완료!");
        this.$router.push({
          name : "HelloWorld"
        });
      });
    },
    
    signIn() {
      const token = localStorage.access_token;
      if(!token)
      {
        let sha = crypto.createHash("sha512");
        
        const loginInfo = {
          username : this.emailin,
          password : sha.update(this.passwordin).digest("base64")
        }

        axios.post('/auth/login',loginInfo).then(response => {
          console.log(response.data);
          const access_token = response.data.access_token;
          if(!access_token)
          { 
            localStorage.access_token = access_token;
            this.$router.push({
              name : "HelloWorld"
            });
          }
        });
      }
      else
      {
        console.log(token);
        const instance = axios.create({
          headers : {
            Authorization : `Bearer ${token}`
          }
        });

        instance.get('/auth/profile').then(response => {
          console.log(response.data);
          this.$router.push({
              name : "HelloWorld"
          });
        }).catch(err => {
          console.warn("인증 만료!!");
        });
      }

    }
  }
};
</script>

<style>
.fill-height{
  background-color:#222;
}
</style>