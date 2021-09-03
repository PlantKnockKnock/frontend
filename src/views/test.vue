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
                        <v-btn class="mr-1" @click="chart1btn" outlined color="purple darken-1">온,습도</v-btn>
                  </v-item-content>
                   <v-item-content>
                        <v-btn class="mr-1" @click="chart2btn" outlined color="purple darken-1">토양수분</v-btn>
                  </v-item-content>
                   <v-item-content>
                        <v-btn class="mr-1" @click="chart3btn" outlined color="purple darken-1">조도</v-btn>
                  </v-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex class="mt-5">
            </v-flex>
            <v-flex class="mt-5">
              <apexchart ref= "chart" type="area" height="350" :options="chartOptions" :series="series"></apexchart>
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

import VueApexcharts from 'vue-apexcharts'
let lastDate = 0;
let data = []
let humidityData = []
let moistureData = []
let lightData = []
let TICKINTERVAL = 86400000
let XAXISRANGE = 777600000
// 초기값 랜덤으로 대충 설정해주는용 
function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        data.push({
        x, y
        });
        lastDate = baseval
        baseval += TICKINTERVAL;
        i++;
    }
}
function resetData(){
    // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series 
    data = data.slice(data.length - 2, data.length);
}

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

      series: [
                {
                    data: data.slice(),
                },
                {
                    data : humidityData.slice()
                },
                {
                    data : lightData.slice()
                }
             ],
      chartOptions: {
                chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                    speed: 1000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
                },
                dataLabels: {
                enabled: false
                },
                stroke: {
                curve: 'smooth'
                },
                title: {
                text: '온도 및 습도',
                align: 'left'
                },
                markers: {
                size: 0
                },
                xaxis: {
                type: 'datetime',
                range: XAXISRANGE,
                labels : {
                    formatter: function (value, timestamp) {
                        return new Date().toLocaleTimeString()
                    }
                }
                },
                yaxis: {
                max: 100,
                fillColor : '#FEB019',
                borderColor: '#000',
                label: {
                        text: 'HIGH'
                        }
                },
                legend: {
                show: false
                },
          },
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
      console.log("마운트 진입");
      var me = this
      let channel = this.$pusher.subscribe('my-channel')
      console.log(channel)
      channel.bind('my-event',function(data_t){
          let t = data_t.temperature
          let h = data_t.humidity
          let newDate = lastDate + TICKINTERVAL
          lastDate = newDate
          /*
          for(var i = 0; i< data.length - 10; i++) {
              data[i].x = newDate - XAXISRANGE - TICKINTERVAL
              data[i].y = 0
          }*/
          data.push({
              x: newDate,
              y: t
          })
          humidityData.push({
              x : newDate,
              y : h
          })
          console.log(data_t)
          me.$refs.chart.updateSeries([{
              data: data,
          },
          {
              data : humidityData,
          }
          ])
      })
      channel.bind('moisture',function(data){
          let moisture = data.moisture
          let newDate = lastDate + TICKINTERVAL
          lastDate = newDate
          moistureData.push({
              x: newDate,
              y: moisture
          })
          me.$refs.chart2.updateSeries([{
              data: moistureData
          }])
      })
      channel.bind('light',function(data){
          let light = data.light
          let newDate = lastDate + TICKINTERVAL
          lastDate = newDate
          lightData.push({
              x: newDate,
              y: light
          })
          me.$refs.chart3.updateSeries([{
              data: lightData
          }])
      })
    },
    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },

      chart1btn() {
        this.chartOptions = {
                chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                    speed: 1000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
                },
                dataLabels: {
                enabled: false
                },
                stroke: {
                curve: 'smooth'
                },
                title: {
                text: '온도 및 습도',
                align: 'left'
                },
                markers: {
                size: 0
                },
                xaxis: {
                type: 'datetime',
                range: XAXISRANGE,
                labels : {
                    formatter: function (value, timestamp) {
                        return new Date().toLocaleTimeString()
                    }
                }
                },
                yaxis: {
                max: 100,
                fillColor : '#FEB019',
                borderColor: '#000',
                label: {
                        text: 'HIGH'
                        }
                },
                legend: {
                show: false
                },
          };
      },
      chart2btn() {
        this.chartOptions = {
                chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                    speed: 1000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
                },
                dataLabels: {
                enabled: false
                },
                stroke: {
                curve: 'smooth'
                },
                title: {
                text: '수분',
                align: 'left'
                },
                markers: {
                size: 0
                },
                xaxis: {
                type: 'datetime',
                range: XAXISRANGE,
                labels : {
                    formatter: function (value, timestamp) {
                        return new Date().toLocaleTimeString()
                    }
                }
                },
                yaxis: {
                max: 1023,
                fillColor : '#E91E63',
                borderColor: '#000',
                label: {
                        text: 'HIGH'
                        }
                },
                legend: {
                show: false
                },
          }
      },
      chart3btn() {
        this.chartOptions = {
                chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                    speed: 1000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
                },
                dataLabels: {
                enabled: false
                },
                stroke: {
                curve: 'smooth'
                },
                title: {
                text: '조도',
                align: 'left'
                },
                markers: {
                size: 0
                },
                xaxis: {
                type: 'datetime',
                range: XAXISRANGE,
                labels : {
                    formatter: function (value, timestamp) {
                        return new Date().toLocaleTimeString()
                    }
                }
                },
                yaxis: {
                max : 1200,
                fillColor : '#E91E63',
                borderColor: '#000',
                label: {
                        text: 'HIGH'
                        }
                },
                legend: {
                show: false
                },
          };
      }
    },
};
</script>


<style scoped>
.rounded {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>