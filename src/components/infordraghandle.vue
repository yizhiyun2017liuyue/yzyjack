<template>
    <div id="pageTwo">
      <div class="heart">
        <img src="../../static/images/ENTER.png" alt="">
        <!-- <canvas id="canvas" width="400" height="400"></canvas> -->
      </div>
      <img src="../../static/images/font_2.png" alt="" class="whiteDay">
   	  <router-link to="/aboutShow" id="btn">完成</router-link>
	</div>
</template>

<script>
export default {
  	name: 'infordraghandle',
  	mounted(){
  		  var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 6;
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
  	}
}
</script>

<style lang="css" scoped>
	@import "../assets/css/infordraghandle.css"
</style>
