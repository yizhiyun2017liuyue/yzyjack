<template>
   <!-- 页面内容 -->
   <div class="aboutShow-page">
        <div class="aboutShow-page-top">
            <!-- 小部件 -->
            <div class="aboutShow-small-component">
                <img v-for="item in aboutimg" :src="item.message" alt="componentShow" :class="item.commonClass" :style="item.itemCss">
            </div>
            <!-- 九宫格 -->
            <div class="aboutShow-sudoku animated zoomIn">
                <img :src="aboutBgSrc" alt="loveLetter" class="about-sudoku-bg">
              <ul>
                <li v-for="sudoku in sudokuAll" :style="sudoku" @touchstart.stop="clickRotate($event)"></li>
              </ul>
            </div>
            <!-- 文字描述 -->
            <div class="aboutShow-text">
                <img :src="aboutShowTextImage" alt="filterShow" class="aboutTextImg" ref="pageThree">
                <img src="/static/images/sudoku/font4.png" alt="filterShow" class="aboutTextImgFour" ref="pageFour">
                <img src="/static/images/sudoku/downdrag.png" alt="downdrag" class="aboutDownDrag">
                <div class="aboutTraLodingContent">
                    <img src="/static/images/sudoku/xiala_s_03.png" alt="traloding" class="aboutTraLoding animated fadeInDown">
                    <img src="/static/images/sudoku/xiala_x_03.png" alt="traloding" class="aboutTraLodingBottom animated fadeInDown">
                </div>
            </div> 
          </div>
        <!-- 下拉展示 -->
       <div class="pullDownShow">
          
       </div>
   </div>

</template>

<script>
export default {
  name: 'aboutShow',
  created:function(){
        var saveBgSrc = ["/static/images/sudoku/x1_03.png","/static/images/sudoku/x2_03.png","/static/images/sudoku/x3_03.png","/static/images/sudoku/x4_03.png","/static/images/sudoku/x5_03.png"];
        this.aboutBgSrc = saveBgSrc[Math.floor(Math.random() * saveBgSrc.length)];
        console.log(this.$route)
  },
  data () {
    return {
        aboutimg:[
            {message:"/static/images/sudoku/mo1.png",commonClass:"animated bounceInLeft",itemCss:"position:absolute;width:1.36rem;height:3.066667rem;left:0rem;top:56.3%;animation-delay:0.4s"},
            {message:"/static/images/sudoku/mo2.png",commonClass:"animated bounceInRight",itemCss:"position:absolute;width:1.066667rem;height:1.533333rem;left:8.906667rem;top:20.89%;animation-delay:0.4s"},
            {message:"/static/images/sudoku/blue_heart.png",commonClass:"animated bounceInRight",itemCss:"position:absolute;width:0.973333rem;height:0.853333rem;left:9.2rem;top:45.19%;animation-delay:0.6s"},
            {message:"/static/images/sudoku/white_heart.png",commonClass:"animated bounceInUp",itemCss:"position:absolute;width:1.133333rem;height:0.986667rem;left:1.573333rem;top:87.31%;animation-delay:0.6s"}
        ],
        aboutShowTextImage:"/static/images/sudoku/textClick.png",
        aboutBgSrc:"",
        sudokuAll:[
          {backgroundImage:'url(/static/images/sudoku/p1.png)',width:"2.773333rem",height:"4.08rem"},
          {backgroundImage:'url(/static/images/sudoku/p2.png)',width:"4.066667rem",height:"3.32rem",left:"2.09rem",top:"-4.08rem"},
          {backgroundImage:'url(/static/images/sudoku/p3.png)',width:"2.746667rem",height:"4.066667rem",top:"-7.4rem",left:"5.44rem"},
          {backgroundImage:'url(/static/images/sudoku/p4.png)',width:"3.426667rem",height:"3.32rem",top:"-8.2rem",left:"0rem"},
          {backgroundImage:'url(/static/images/sudoku/p5.png)',width:"2.8rem",height:"4.866667rem",top:"-12.31rem",left:"2.72rem"},
          {backgroundImage:'url(/static/images/sudoku/p6.png)',width:"3.333333rem",height:"3.32rem",top:"-16.4rem",left:"4.86rem"},
          {backgroundImage:'url(/static/images/sudoku/p7.png)',width:"2.76rem",height:"4.093333rem",top:"-17.2rem",left:"0rem"},
          {backgroundImage:'url(/static/images/sudoku/p8.png)',width:"4.066667rem",height:"3.32rem",top:"-20.52rem",left:"2.11rem"},
          {backgroundImage:'url(/static/images/sudoku/p9.png)',width:"2.746667rem",height:"4.16rem",top:"-24.67rem",left:"5.46rem"},
        ],
        aboutCount:0,
    }
  },
    methods:{
      clickRotate(ele){
        var ctrl = this;
        if($(ele.target).hasClass("animated"))return;
        if(ctrl.aboutCount == 8){
             ctrl.pageLastChange();
        }
        var randomAnimate = ["rotateOutUpLeft","rotateOutUpRight","rotateOutDownLeft","rotateOutDownRight","rotateOut"];
        $(ele.target).addClass("animated "+randomAnimate[Math.floor(Math.random() * randomAnimate.length)]+"").css("zIndex","0");
        ctrl.aboutCount++;
        $(ele.target).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animatio nend",function(){
          $(ele.target).removeClass().css("visibility","hidden");
        })
      },
      pageLastChange(){
       $(this.$refs.pageThree).addClass("animated zoomOut");
       $(this.$refs.pageFour).show().addClass("animated zoomIn");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/aboutShow.css"
</style>
