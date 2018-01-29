<template>
   <!-- 页面内容 -->
   <div class="aboutShow-page">
        <div class="aboutShow-page-top">
            <!-- 小部件 -->
            <div class="aboutShow-small-component">
                <img v-for="item in aboutimg" :src="item.message" alt="componentShow" :class="item.commonClass" :style="item.itemCss">
            </div>
            <!-- 九宫格 -->
            <div class="aboutShow-sudoku" :style="{backgroundImage:'url('+aboutBgSrc+')'}">
              <ul>
                <li v-for="sudoku in sudokuAll" :style="{backgroundImage:'url(/static/images/sudoku/'+sudoku+'.png)'}" @touchstart.stop="clickRotate($event)"></li>
              </ul>
            </div>
            <!-- 文字描述 -->
            <div class="aboutShow-text">
                <img :src="aboutShowTextImage" alt="filterShow" class="aboutTextImg" ref="pageThree">
                <img src="/static/images/sudoku/font4.png" alt="filterShow" class="aboutTextImgFour" ref="pageFour">
                <img src="/static/images/sudoku/downdrag.png" alt="downdrag" class="aboutDownDrag">
                <img src="/static/images/sudoku/xiala.png" alt="traloding" class="aboutTraLoding">
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
        var saveBgSrc = ["/static/images/sudoku/x_03.png"];
        this.aboutBgSrc = saveBgSrc[Math.floor(Math.random() * saveBgSrc.length)];
  },
  data () {
    return {
        aboutimg:[
            {message:"/static/images/sudoku/mo1.png",commonClass:"animated bounceInLeft",itemCss:"position:absolute;width:1.36rem;height:3.066667rem;left:0rem;top:56.3%;animation-delay:0.8s"},
            {message:"/static/images/sudoku/mo2.png",commonClass:"animated bounceInRight",itemCss:"position:absolute;width:1.066667rem;height:1.533333rem;left:8.906667rem;top:20.89%;animation-delay:0.8s"},
            {message:"/static/images/sudoku/blue_heart.png",commonClass:"animated bounceInRight",itemCss:"position:absolute;width:0.973333rem;height:0.853333rem;left:9.2rem;top:45.19%;animation-delay:1s"},
            {message:"/static/images/sudoku/white_heart.png",commonClass:"animated bounceInUp",itemCss:"position:absolute;width:1.133333rem;height:0.986667rem;left:1.573333rem;top:87.31%;animation-delay:1s"}
        ],
        aboutShowTextImage:"/static/images/sudoku/textClick.png",
        aboutBgSrc:"",
        sudokuAll:["H5-P34_03","H5-P34_04","H5-P34_05","H5-P34_08","H5-P34_09","H5-P34_07","H5-P34_11","H5-P34_12","H5-P34_10"],
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
