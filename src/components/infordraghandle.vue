<template>
    <div>
    	<p>测试</p>
   	    <router-link to="/aboutShow">第二个页面</router-link>
   	    <canvas id="canvas" width="300" height="300"></canvas>
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
