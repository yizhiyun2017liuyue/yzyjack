<template>
    <div id="pageOne">
    	<!-- <div class="content" :class="{shake:isClass}"> -->
    	<div class="clipped-box item">
    	<div class="content" :class="[count > 1 ? {shake:isClass}: animate]">
			<img src="/static/images/images1/3.png" alt="" class="center">
			<img src="/static/images/images1/blue_d.png" alt="" class="blue" :class="{shake1:isClass1}">
			<img src="/static/images/images1/red.png" alt="" class="red" :class="{shake2:isClass2}">
    		<img src="/static/images/images1/font_he.png" alt="" class="he">
    		<img src="/static/images/images1/font_2.png" alt="" class="whiteDay">	
    	</div>
    	</div>
    	 <img v-for="item in imgs" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss">   
   	    <router-link to="/infordraghandle" class="btn">马上开启</router-link>
   	    <!-- <input type="button" class="btn" value="马上开启"> -->
	</div>
</template>
<script>
	export default {
	 	name: 'information',
	 	data() {
    		return {
    		  imgs:[
            	{message:"/static/images/images1/blue_l.png",commonClass:"blue_l animated fadeInLeft delay1",itemClass:""},
            	{message:"/static/images/images1/CHANG.png",commonClass:"shadow animated fadeInRight delay2",itemClass:""},
            	{message:"/static/images/images1/blue_jazz.png",commonClass:"blue_jazz animated fadeInRight delay3",itemClass:""},
            	{message:"/static/images/images1/pink_triangle.png",commonClass:"pinkTri animated fadeInRight delay5",itemClass:""},
            	{message:"/static/images/images1/blue_s.png",commonClass:"blue_s animated fadeInRight delay4",itemClass:""},
            	{message:"/static/images/images1/font1.png",commonClass:"moment",itemClass:""}
    		  ],
		      isClass: false,
		      isClass1: false,
		      isClass2: false,
    		  animate:"animated zoomIn",
		      shake: "shake",
		      shake1: "shake1",
		      shake2: "shake2",
		      t: 0,
		      count:0
		    };
  		},
	 //  	mounted() {
		//     var cur = this;
		//     setInterval(timer, 1000);
		//     function timer() {
		//       cur.isClass = true;
		//       cur.count++;
		//       cur.isClass1 = true;
		//       cur.isClass2 = true;
		//       cur.t += 100;
		//       if (cur.t % 3 == 0) {
		//         cur.isClass = false;
		//         // cur.isClass1 = false;
		//         // cur.isClass2 = false;
		//    	  }
		//     }
		//     timer();

		//     // var item = {jq:$('.item'),flag:false} 
	 //    	// $(".btn").click(function(){
	 //    	// 	bomb(item);
	 //    	// })
		   
		// }
	}
</script>

<style lang="css" scoped>
	@import "../assets/css/information.css";
	@import "../../static/css/animate.css";
	.delay1{animation-delay:0.2s;}
	.delay2{animation-delay:0.4s;}
	.delay3{animation-delay:0.6s;}
	.delay4{animation-delay:0.8s;}
	.delay5{animation-delay:1s;}
</style>
