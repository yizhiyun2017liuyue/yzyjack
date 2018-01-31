<template>
    <div id="pageTwo"> 
        <img v-for="item in imgs" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss"> 
        <div class="heart animated zoomIn delay3" id="cir">
          <img src="/static/images/images1/ENTER2.png" alt="" class="enter">
          <canvas id="canvas"></canvas>
          <p id="draw">画下关于你的MR.RIGHT</p>
        </div>
        <!-- <canvas id="canvas" width="305" height="218" class="animated zoomIn delay10"></canvas> -->
        <div id="btn" @click="save">完成</div>
        <!-- <router-link to="/aboutShow" id="btn">完成</router-link> -->
	</div>  
</template>

<script>
export default {
  	name: 'infordraghandle',
    data(){
      return {
          imgs:[
            {message:"/static/images/images1/s1.png",commonClass:"leftTop animated zoomIn delay1",itemClass:""},
            {message:"/static/images/images1/s2.png",commonClass:"rightTop animated zoomIn delay2",itemClass:""},
            {message:"/static/images/images1/ENTER.png",commonClass:"heart animated zoomIn delay3",itemClass:""},
            {message:"/static/images/images1/pink_triangle.png",commonClass:"pinkTri",itemClass:""},
            {message:"/static/images/images1/font_2.png",commonClass:"whiteDay animated zoomIn delay7",itemClass:""},
            {message:"/static/images/images1/s4.png",commonClass:"leftBottom animated zoomIn delay4",itemClass:""},
            {message:"/static/images/images1/s3.png",commonClass:"rightBottom animated zoomIn delay5",itemClass:""},
            {message:"/static/images/images1/s5.png",commonClass:"bottom animated zoomIn delay6",itemClass:""},
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
        // ctx.font = "15px Arial";
        // ctx.fillStyle = 'blue';
        // ctx.fillText("画下关于你的MR.RIGHT",70,70);
        //给定canvas宽高
        var inforClientWidth = document.documentElement.clientWidth; 
        var inforClientHeight = document.documentElement.clientHeight;

        canvas.width = Math.floor(inforClientWidth*461/750*window.devicePixelRatio);
        canvas.height = Math.floor(inforClientHeight*398/1334*window.devicePixelRatio);
        var ctrl = this;
        ctx.lineWidth = 1*window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio,window.devicePixelRatio)
        canvas.addEventListener('touchstart',function(event){   //触摸点按下事件
            
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
        save:function(){
            this.$router.push({name: 'aboutShow',params:{aboutSrc:canvas.toDataURL("image/png")}});
        } 
    }
}
</script>

<style lang="css" scoped>
	@import "../assets/css/infordraghandle.css";
  @import "../../static/css/animate.css";
  .delay1{animation-duration:2s;animation-delay:0.1s;}
  .delay2{animation-duration:2s;animation-delay:0.2s;}
  .delay3{animation-duration:2s;animation-delay:0.65s;}
  .delay4{animation-duration:2s;animation-delay:0.3s;}
  .delay5{animation-duration:2s;animation-delay:0.4s;}
  .delay6{animation-duration:2s;animation-delay:0.5s;}
  .delay7{animation-duration:2s;animation-delay:0.6s;}
  /*.delay10{animation-duration:2s;animation-delay:0.7s;}*/
</style>
