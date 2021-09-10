<template>
<div class = "introContainer">
  <div class="centerContainer">
    <div class="leftContainer">
      <div class="circle"><span>SPMS</span></div>
      <div class="Logo">
        <span id="Logo">Plant</span>
        <span id="Logo">똑똑</span>
      </div>
    </div>

    <div class="bar"></div>

  </div>

</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

.introContainer {
  display: flex;
  flex-direction: column;
  height : 100vh;
  justify-content: center;
  align-items: center;

  .centerContainer {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 20rem;
    justify-content: center;

    .bar{
      position: absolute;
      width: 100%;
      height: 0.5em;
      background-image: linear-gradient(#444444, #444444), linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
      background-origin: border-box;
      background-clip: content-box, border-box;
      border: 5px solid transparent;
      border-radius: 20px;

      animation: barAnimation 4s infinite ease-out;
    }

    .leftContainer {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding : 0 10rem;

      .circle {
        background-color:#fbfcb9;
        border-radius: 20rem;
        text-align: center;
        width: 7rem;
        height: 7rem;
        z-index: 10;

        span {
          position: relative;
          top : 35%;
          color : black;
          font-size: 1.3rem;
          font-weight: bold;
        }
      }

      .Logo {
        display: flex;
        flex-direction: column;
        padding : 0 10rem;
            #Logo{
              font-size : 7rem;
              font-weight: bold;
              color : white
            }
      }
    }

  }
}

@keyframes barAnimation {
  0% {
    width: 0%;
  }

  100% {
    width : 100%;
  }
}

</style>
