<template>
	<!--　页面一  -->
    <div id="pageOne">
    	<!-- 三角形区域 -->
    	<div class="content" :class="[count > 1 ? {shakeCir:isClass}: animate]">
			<img src="/static/images/images1/3.png" alt="" class="black"　onclick="return false">
			<img src="/static/images/images1/blue_d.png" alt="" class="blue" :class="{shake1:isClass1}"　onclick="return false">
			<img src="/static/images/images1/red.png" alt="" class="red" :class="{shake2:isClass2}"　onclick="return false">
    		<img src="/static/images/images1/font_he.png" alt="" class="he"　onclick="return false">
    		<img src="/static/images/images1/font_2.png" alt="" class="whiteDay"　onclick="return false">	
    		<!-- 裂缝 -->
    		<div class="bomb">
    			<img v-for="item in crackImgs" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss" onclick="return false">   
    		</div>
    	</div>
    	<!-- 爆炸碎片 -->
    	<div class="bombImgs">
    		<img v-for="item in bombImgs" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss" onclick="return false">   
    	</div>
    	<!-- 三角元素 -->
    	<img v-for="item in triImgs" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss" onclick="return false">   
   	    <!-- <router-link to="/infordraghandle" class="btn">马上开启</router-link> -->
        <div class="btn" @click="next">马上开启</div>
	</div>
</template>
<script>
	export default {
		created:function(){
		    this.test = setInterval(this.timer,1000);
		},
	 	name: 'information',
	 	data() {
    		return {
    		  triImgs:[
            	{message:"/static/images/images1/blue_l.png",commonClass:"animated fadeInLeft delay1",itemCss:"width:2.773333rem;height:5.72rem;position: absolute;left:0.48rem;bottom:2.973333rem;z-index:1;"},
            	{message:"/static/images/images1/CHANG.png",commonClass:"animated fadeInRight delay2",itemCss:"width:4.2rem;height:4.2rem;position: absolute;right:-1rem;top:4rem;z-index:1;"},
            	{message:"/static/images/images1/blue_jazz.png",commonClass:"animated fadeInRight delay3",itemCss:"width:3.28rem;height:3.28rem;position: absolute;right:0.52rem;top:5.3rem;z-index:5;"},
            	{message:"/static/images/images1/pink_triangle.png",commonClass:"animated fadeInRight delay5",itemCss:"width:1.64rem;height:1.64rem;position: absolute;right:1.36rem;top:8.8rem;"},
            	{message:"/static/images/images1/blue_s.png",commonClass:"blue_s animated fadeInRight delay4",itemCss:"width:0.773333rem;height:0.773333rem;position: absolute;top:5.8rem;right:0;z-index:7;"},
            	{message:"/static/images/images1/font1.png",commonClass:"moment",itemCss:"width:2.866667rem;height:0.786667rem;position: absolute;bottom:3.28rem;left:3.5rem;animation-name:fadeIn;animation-duration:5s;"}
    		  ],
    		  crackImgs:[
            	{message:"/static/images/images1/l1.png",commonClass:"l1",itemCss:""},
            	{message:"/static/images/images1/l2.png",commonClass:"l2",itemCss:""},
            	{message:"/static/images/images1/l3.png",commonClass:"l3",itemCss:""},
            	{message:"/static/images/images1/l4.png",commonClass:"l4",itemCss:""}
    		  ],
    		  bombImgs:[
            	{message:"/static/images/images1/b1.png",commonClass:"b1",itemCss:""},
            	{message:"/static/images/images1/b2.png",commonClass:"b2",itemCss:""},
            	{message:"/static/images/images1/b3.png",commonClass:"b3",itemCss:""},
            	{message:"/static/images/images1/b4.png",commonClass:"b4",itemCss:""},
            	{message:"/static/images/images1/b5.png",commonClass:"b5",itemCss:""}
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
		      test:"",
		    };
  		},
		methods:{
			timer(){
				this.isClass = true;
			    this.count++;
			    this.isClass1 = true;
			    this.isClass2 = true;
			    this.t += 100;
			    if (this.t % 3 == 0) {
			        this.isClass = false;
			   	}
			},
			next:function(){
				this.t = 1.1;
				// clearInterval(this.test);

				$(".bomb .l1").addClass("animated zoomIn del1");
				$(".bomb .l2").addClass("animated zoomIn del3");
				$(".bomb .l3").addClass("animated zoomIn del2");
				$(".bomb .l4").addClass("animated zoomIn del4");
				$(".bombImgs .b1").addClass("magictime tinUpOut delay_time1");
				$(".bombImgs .b2").addClass("magictime tinRightOut delay_time2");
				$(".bombImgs .b3").addClass("magictime tinDownOut delay_time3");
				$(".bombImgs .b4").addClass("magictime tinRightOut delay_time4");
				$(".bombImgs .b5").addClass("magictime tinLeftOut delay_time5");
				setTimeout(function(){
					$(".content").hide();
				},600)

				var _this = this;
				setTimeout(function(){
					_this.$router.push({name: 'infordraghandle'});
				},800)
        	} 
		}
	}
</script>

<style lang="css" scoped>
	@import "../assets/css/information.css";
	@import "../../static/css/animate.css";
	@import "../../static/css/magic.css";
</style>
