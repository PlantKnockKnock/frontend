<template>
    <div id="chart">
        <apexchart ref= "chart" type="area" height="350" :options="chartOptions" :series="series"></apexchart>
        <apexchart ref= "chart2" type="area" height="350" :options="chartOptions2" :series="series2"></apexchart>
        <apexchart ref= "chart3" type="area" height="350" :options="chartOptions3" :series="series3"></apexchart>
    </div>
</template>

<script>
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
export default{
    created : function() {
        getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {min: 0,max: 40})
    },
    name : "SensorChart",
    components : {
        apexchart : VueApexcharts
    },
    data : function() {
        return {
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
          chartOptions2 :  {
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
          },
          chartOptions3 :  {
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
          },
        }
    },
    mounted : function () {
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
        // every 60 seconds, we reset the data to prevent memory leaks
        /*
        window.setInterval(function () {
        resetData()
        
        me.$refs.chart.updateSeries([{
            data
        }], false, true)
        }, 60000)*/
    }
}
</script>