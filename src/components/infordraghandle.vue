<template>
    <div id="pageTwo"> 
        <img v-for="item in imgs" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss"> 
        <div class="heart animated zoomIn delay3" id="cir">
          <img src="/static/images/images1/ENTER2.png" alt="" class="enter">
          <canvas id="canvas" width="461" height="398"></canvas>
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
            {message:"/static/images/images1/s1.png",commonClass:"leftTop active delay1",itemClass:""},
            {message:"/static/images/images1/s2.png",commonClass:"rightTop active delay2",itemClass:""},
            {message:"/static/images/images1/ENTER.png",commonClass:"heart animated zoomIn delay3",itemClass:""},
            {message:"/static/images/images1/pink_triangle.png",commonClass:"pinkTri",itemClass:""},
            {message:"/static/images/images1/font_2.png",commonClass:"whiteDay animated zoomIn delay7",itemClass:""},
            {message:"/static/images/images1/s4.png",commonClass:"leftBottom active delay4",itemClass:""},
            {message:"/static/images/images1/s3.png",commonClass:"rightBottom active delay5",itemClass:""},
            {message:"/static/images/images1/s5.png",commonClass:"bottom active delay6",itemClass:""},
          ],
          aboutSrc:""
      }
    },
  	mounted(){
        var cir = document.getElementById("cir");
        var draw = document.getElementById("draw");
  		  var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var image = new Image();
        image.src = "/static/images/images1/write.png";
        image.onload = function(){
            ctx.drawImage(image,0,0);
        }

        ctx.lineWidth = 5;
        document.querySelector('body').addEventListener('touchstart', function (ev) {
            event.preventDefault();
        });
        canvas.addEventListener('touchstart',function(event){   //触摸点按下事件
            // event.preventDefault();
            draw.style.display = "none";
            if (event.targetTouches.length == 1) {         
                var touch = event.targetTouches[0];
                ctx.beginPath();
                ctx.moveTo(touch.clientX-canvas.offsetLeft-cir.offsetLeft,touch.clientY-canvas.offsetTop-cir.offsetTop);
                canvas.addEventListener('touchmove',function (event) {  //手机拖动触摸点事件
                    var touche = event.targetTouches[0];
                    ctx.lineTo(touche.clientX - canvas.offsetLeft-cir.offsetLeft, touche.clientY - canvas.offsetTop-cir.offsetTop);
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
            this.$router.push({name: 'aboutShow',params:{id:canvas.toDataURL("image/png")}});
        } 
    }
}
</script>

<style lang="css" scoped>
	@import "../assets/css/infordraghandle.css";
  @import "../../static/css/animate.css";
  .delay1{animation-duration:3s;}
  .delay2{animation-duration:3s;}
  .delay3{animation-duration:2s;animation-delay:1.2s;}
  .delay4{animation-duration:3s;}
  .delay5{animation-duration:3s;}
  .delay6{animation-duration:3s;}
  .delay7{animation-duration:3s;animation-delay:0.5s;}
</style>
