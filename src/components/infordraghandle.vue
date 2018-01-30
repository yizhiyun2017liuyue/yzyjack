<template>
    <div id="pageTwo"> 
        <img v-for="item in imgs" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss"> 
        <div class="heart animated zoomIn delay3">
          <img src="/static/images/images1/ENTER.png" alt="">
          <canvas id="canvas" width="305" height="218"></canvas>
        </div>
        <!-- <canvas id="canvas" width="305" height="218" class="animated zoomIn delay10"></canvas> -->
        <!-- <input type="button" id="btn" value="完成" v-on:click="save"> -->
        <router-link to="/aboutShow" id="btn" v-on:click.native="save">完成</router-link>
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
          aboutSrc:""
      }
    },
  	mounted(){
  		  var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 5;
        canvas.addEventListener('touchstart',function(event){   //触摸点按下事件
            if (event.targetTouches.length == 1) {         
                var touch = event.targetTouches[0];
                ctx.beginPath();
                ctx.moveTo(touch.clientX-canvas.offsetLeft,touch.clientY-canvas.offsetTop);
                canvas.addEventListener('touchmove',function (event) {  //手机拖动触摸点事件
                    var touche = event.targetTouches[0];
                    ctx.lineTo(touche.clientX - canvas.offsetLeft, touche.clientY - canvas.offsetTop);
                    ctx.stroke();
                },false)
                canvas.addEventListener('touchend',function (event) {  //手机离开屏幕的事件
                    ctx.closePath();
                },false)
            }
        },false)
    },
    methods:{
        save(){
            var imageData = canvas.toDataURL("image/png");
            // console.log(imageData);
            var mycanvas = document.getElementById("canvas"); 
            var info=window.open('about:blank','image from canvas'); 
            info.document.write("<img src='"+imageData+"' alt='from canvas'/>");  
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
  .delay10{animation-duration:2s;animation-delay:0.7s;}
</style>
