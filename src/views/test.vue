<template>
  <v-app v-bind:style="{background: $vuetify.theme.themes.dark.background}">
    <v-layout row>
      <v-flex md3>
        <v-app :style="{background: $vuetify.theme.themes.dark.background}">
          <v-container>
            <v-flex>
              <v-card class="ma-5 text-center mt-12" shaped elevation="10">
                <v-avatar class="mt-n7" size="60" elevation="10">
                </v-avatar>
                <v-card-title class="layout justify-center">Plant 똑똑</v-card-title>
                <v-card-subtitle class="layout justify-center">admin</v-card-subtitle>
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="purple--text text--darken-1">식물</v-list-item-title>
                    <v-list-item-title class="purple--text text--darken-1">상태</v-list-item-title>
                    <v-list-item-title class="purple--text text--darken-1">닉네임</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>null</v-list-item-subtitle>
                    <v-list-item-subtitle>null</v-list-item-subtitle>
                    <v-list-item-subtitle>null</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex>
              <v-list color="transparent" class="text-center">
                <v-list-item>
                  <v-list-item-title class="purple--text text--darken-1">Notifications</v-list-item-title>
                  <v-list-item-subtitle>15 Oct 2021</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <br>
              <br>
            </v-flex>
            <v-flex class="ml-8">
                  <v-row >
                    <div>
                      <v-date-picker
                        v-model="date2"
                        :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                        :events="functionEvents"
                      ></v-date-picker>
                    </div>
                  </v-row>
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
      <v-flex md9>
        <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="rounded">
          <v-container>
            <v-flex>
              <v-list class="mt-5">
                <v-list-item>
                  <v-list-item-title class="purple--text text--darken-1">상태요약</v-list-item-title>
                  <br>
                  <br>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex>
              <v-row no-gutters>
                  <v-col cols="12" md="4" >
                   <v-row>
                     <v-col cols="12" md="2">
                        <v-card height="80px" width="10px" color="green"></v-card>
                     </v-col>
                     <v-col cols="12" md="10">
                       <v-list two-line subheader class="ml-n8">
                  <v-list-item>
                    <v-list-item-content>
                       <v-list-item-subtitle>온, 습도 상태</v-list-item-subtitle>
                      <v-list-item-title>양호</v-list-item-title>
                      <v-list-item-subtitle>문제 없음</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
                  <v-col cols="12" md="4">
                     <v-row>
                     <v-col cols="12" md="2">
                        <v-card height="80px" width="10px" color="green"></v-card>
                     </v-col>
                     <v-col cols="12" md="10">
                       <v-list two-line subheader class="ml-n8">
                  <v-list-item>
                    <v-list-item-content>
                       <v-list-item-subtitle>조도 상태</v-list-item-subtitle>
                      <v-list-item-title>양호</v-list-item-title>
                      <v-list-item-subtitle>문제 없음</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-row>
                     <v-col cols="12" md="2">
                        <v-card height="80px" width="10px" color="red"></v-card>
                     </v-col>
                     <v-col cols="12" md="10">
                       <v-list two-line subheader class="ml-n8">
                  <v-list-item>
                    <v-list-item-content>
                       <v-list-item-subtitle>토양 수분 상태</v-list-item-subtitle>
                      <v-list-item-title>이상</v-list-item-title>
                      <v-list-item-subtitle>수분 부족</v-list-item-subtitle>
                      </v-list-item-content>
                  </v-list-item>
                </v-list>
                     </v-col>
                   </v-row>
                  </v-col>
              </v-row>
            </v-flex>
            <br>
            <br>
             <v-flex>
              <v-list class="mt-5">
                <v-list-item>
                  <v-list-item-title class="purple--text text--darken-1">화분 상태</v-list-item-title>
                  <v-item-content>
                        <v-btn class="mr-1" outlined color="purple darken-1">온,습도</v-btn>
                  </v-item-content>
                   <v-item-content>
                        <v-btn class="mr-1" outlined color="purple darken-1">조도</v-btn>
                  </v-item-content>
                   <v-item-content>
                        <v-btn class="mr-1" outlined color="purple darken-1">토양수분</v-btn>
                  </v-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex class="mt-5">
            </v-flex>
            <v-flex class="mt-5">
                <v-sparkline
                  :value="value"
                  :gradient="gradient"
                  :smooth="radius || false"
                  :padding="padding"
                  :line-width="width"
                  :stroke-linecap="lineCap"
                  :gradient-direction="gradientDirection"
                  :fill="fill"
                  :type="type"
                  :auto-line-width="autoLineWidth"
                  auto-draw
                ></v-sparkline>
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
export default {
  data: () => ({
     width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
       arrayEvents: null,
      date2: new Date().toISOString().substr(0, 10),
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
    },
    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },
    },
};
</script>
<style scoped>
.rounded {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>