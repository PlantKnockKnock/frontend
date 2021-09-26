<template>
  <div class="diaryContainer">
      <div class="diaryList">
        <div class="itemWrap">
          <div class="diaryItem">
            <div class="imgContainer"><img src ="/imgs/1.jpg"></div>  
            <div class="diaryDescription">
              <div><span class="title">나의 반려식물</span></div>
              <div><span>식물이 무럭무럭 자란걸 보고 뿌듯했다.</span></div>
              <div><span>2021/09/26</span></div>
            </div>
          </div>
        </div>
        <div class="itemWrap">
          <div class="diaryItem">
            <div class="imgContainer"><img src ="https://previews.123rf.com/images/shapicingvar/shapicingvar1802/shapicingvar180200113/96739672-자란-마리화나-화분에-대마초입니다-자연에서-마리화나-식물을-피-.jpg"></div>  
            <div class="diaryDescription">
              <div><span class="title">특이한 식물</span></div>
              <div><span>난생 처음으로 이러한 식물도 키워봤다.</span></div>
              <div><span>2021/09/26</span></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  ,
  },
  methods : {
  }
};
</script>

<style lang="scss">
.diaryContainer {
    height: 90vh;
    width: 80vw;
    margin : 5vh auto;

    .diaryList {
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        .itemWrap {
          padding : 2vh 0;
          width:60%;
          .diaryItem {
            box-shadow: 0 4px 7px 0 gray;
            background-color: white;
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 25vh;
  
            .imgContainer {
              width: 40%;
              height: 100%;
  
              img {
                width: 100%;
                height: 100%;
              }
            }
  
            .diaryDescription {
              width: 100%;
              height: 100%;
              div {
                padding : 0.4rem 0.5rem;
                span.title {
                  font-size : small;
                  font-weight: bold;
                }
                span {
                  font-size: x-small;
                  font-weight:lighter;
                }
              }
            }
          }
        }
    }
}

</style>
