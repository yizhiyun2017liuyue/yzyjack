<template>
    <div id="pageOne">
    	<!-- <div class="content shakeCir"> -->
    	<div class="content" :class="[count > 1 ? {shakeCir:isClass}: animate]">
			<img src="/static/images/images1/3.png" alt="" class="center">
			<img src="/static/images/images1/blue_d.png" alt="" class="blue" :class="{shake1:isClass1}">
			<img src="/static/images/images1/red.png" alt="" class="red" :class="{shake2:isClass2}">
    		<img src="/static/images/images1/font_he.png" alt="" class="he">
    		<img src="/static/images/images1/font_2.png" alt="" class="whiteDay">	
    	</div>
    	<div class="up">
    		<img src="/static/images/images1/s1.png" alt="" class="s1">
			<img src="/static/images/images1/s2.png" alt="" class="s2">
			<img src="/static/images/images1/s3.png" alt="" class="s3">
    		<img src="/static/images/images1/s4.png" alt="" class="s4">
    		<img src="/static/images/images1/s5.png" alt="" class="s5">
    	</div>
    	 <img v-for="item in imgs" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss">   
   	    <!-- <router-link to="/infordraghandle" class="btn">马上开启</router-link> -->
        <div class="btn" @click="next">马上开启</div>
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
		      shakeCir: "shakeCir",
		      shake1: "shake1",
		      shake2: "shake2",
		      t: 0,
		      count:0,
		      test:""
		    };
  		},
	  	mounted() {
		    var cur = this;
		    this.test = setInterval(timer, 1000);
		    function timer() {
		      cur.isClass = true;
		      cur.count++;
		      cur.isClass1 = true;
		      cur.isClass2 = true;
		      cur.t += 100;
		      if (cur.t % 3 == 0) {
		        cur.isClass = false;
		        // cur.isClass1 = false;
		        // cur.isClass2 = false;
		   	  }
		    }
		    timer();
		},
		methods:{
			next:function(){
				clearInterval(this.test);
				$(".content").removeClass("animted zoomIn shakeCir");
				$(".content").addClass("magictime out");
				$(".up .s1").addClass("magictime tinUpOut del");
				$(".up .s2").addClass("magictime tinRightOut del");
				$(".up .s3").addClass("magictime tinRightOut del");
				$(".up .s4").addClass("magictime tinLeftOut del");
				$(".up .s5").addClass("magictime tinDownOut del");
				var _this = this;
				setTimeout(function(){
					_this.$router.push({name: 'infordraghandle'});
				},1300)
        	} 
		}
	}
</script>

<style lang="css" scoped>
	@import "../assets/css/information.css";
	@import "../../static/css/animate.css";
	@import "../../static/css/magic.css";
	.delay1{animation-delay:0.2s;}
	.delay2{animation-delay:0.4s;}
	.delay3{animation-delay:0.6s;}
	.delay4{animation-delay:0.8s;}
	.delay5{animation-delay:1s;}
	.del{animation-duration:1s;animation-delay:1s;}
</style>
