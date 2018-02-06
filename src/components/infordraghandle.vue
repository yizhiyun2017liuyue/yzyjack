<template>
    <!-- 页面二 -->
    <div id="pageTwo"> 
        <!-- 爆炸碎片 -->
        <img v-for="item in bombImgs" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss" onclick="return false"> 
        <!-- 心形区域 -->
        <div class="heart animated zoomIn" id="cir">
            <img src="/static/images/images1/ENTER2.png" alt="" class="enter" onclick="return false">
            <canvas id="canvas"></canvas>
            <p id="draw">画下关于你的MR.RIGHT</p>
        </div>
        <div id="btn" @click="finish">完成</div>
        <!-- <router-link to="/aboutShow" id="btn">完成</router-link> -->
	</div>  
</template>

<script>
export default {
  	name: 'infordraghandle',
    data(){
      return {
          bombImgs:[
            {message:"/static/images/images1/s1.png",commonClass:"active",itemCss:"width:0.6rem;height:0.533333rem;position:absolute;top:1.533333rem;left:2.666667rem;"},
            {message:"/static/images/images1/s2.png",commonClass:"active",itemCss:"width:0.213333rem;height:0.16rem;position: absolute;top:2.826667rem;right:1.866667rem;"},
            {message:"/static/images/images1/pink_triangle.png",commonClass:"",itemCss:"width:1.64rem;height:1.64rem;position: absolute;right:1.36rem;top:8.8rem;"},
            {message:"/static/images/images1/font_2.png",commonClass:"animated zoomIn delay2",itemCss:"width:2.8rem;height:1.28rem;position:absolute;bottom:3.466667rem;left:3.6rem;"},
            {message:"/static/images/images1/s4.png",commonClass:"active",itemCss:"width:0.44rem;height:0.36rem;position:absolute;left:1.306667rem;bottom:3.493333rem;"},
            {message:"/static/images/images1/s3.png",commonClass:"active",itemCss:"width:0.573333rem;height:0.84rem;position: absolute;right:1.866667rem;bottom:4.253333rem;"},
            {message:"/static/images/images1/s5.png",commonClass:"active",itemCss:"width:0.346667rem;height:0.48rem;position: absolute;bottom:0.413333rem;right:4.493333rem;"},
          ],
          aboutSrc:"",
          ceshi:"",
          ceshi1:"",
          ceshi2:"",

      }
    },
  	mounted(){
        var cir = document.getElementById("cir");
        var draw = document.getElementById("draw");
  		var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        //给定canvas宽高
        var inforClientWidth = document.documentElement.clientWidth; 
        var inforClientHeight = document.documentElement.clientHeight;
  
        canvas.width = Math.floor(inforClientWidth*461/750*window.devicePixelRatio);
        canvas.height = Math.floor(inforClientHeight*398/1334*window.devicePixelRatio);
        var ctrl = this;
        ctx.lineWidth = 1*window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio,window.devicePixelRatio);
        canvas.addEventListener('touchstart',function(event){   //触摸点按下事件
            event.preventDefault();
            draw.style.display = "none";
            if (event.targetTouches.length == 1) {
                var touch = event.targetTouches[0];
                ctx.beginPath();
                ctx.moveTo(touch.clientX-canvas.getBoundingClientRect().left,touch.clientY-canvas.getBoundingClientRect().top);
                canvas.addEventListener('touchmove',function (event) {  //手机拖动触摸点事件
                    var touche = event.targetTouches[0];
                    ctx.lineTo(touche.clientX - canvas.getBoundingClientRect().left, touche.clientY - canvas.getBoundingClientRect().top);
                    ctx.stroke();
                },false)
                canvas.addEventListener('touchend',function (event) {  //手机离开屏幕的事件
                    ctx.closePath();
                },false)
            }
        },false)
    },
    methods:{
        finish:function(){
            this.$router.push({name: 'aboutShow',params:{aboutSrc:canvas.toDataURL("image/png")}});
        } 
    }
}
</script>

<style lang="css" scoped>
	@import "../assets/css/infordraghandle.css";
  @import "../../static/css/animate.css";
</style>
