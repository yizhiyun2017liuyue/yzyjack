<template>
  <div id="app" ref="appContent">
  	<div class="app-bg" :style="height">
  		<!-- logo -->
  		<!-- <img src="/static/images/home/logo.png" alt="logo" class="app-logo"> -->
  		<!-- smallComponent -->
  		<img v-for="item in appimg" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss" :data-src="item.message" ref="changimg">
  		<router-view/>	
  	</div>
    
  </div>
</template>

<script>

export default {
  name:'App',
  created: function () {
      // this.$router.push('/');
      this.$nextTick(function(){
      		if( window.devicePixelRatio && window.devicePixelRatio >= 3){
      			this.$refs.changimg.forEach((e)=>{
      				$(e).attr("src",$(e).data("src"))
      			})
      		}
      });
 
      if(this.isIPad()){
      	$("body").css({maxWidth:"600px",maxHeight:"100%",margin:"0 auto"});
      	document.getElementsByTagName("html")[0].style.fontSize = "60px";
      	document.getElementsByTagName("html")[0].style.background = "white"
      }

 },
  data (){
  	return {
  		height:{
  			height:"",
  			background:"",
  			backgroundSize:""
  		},
  		appimg:[
  			{message:"/static/images/home/cri_top.png",commonClass:"app-bg-cri",itemCss:"position:absolute;width:6.973333rem;height:7.253333rem;left:1.546667rem;top:-12.4%;"},
  			{message:"/static/images/home/cri_bottom.png",commonClass:"app-bg-cri",itemCss:"position:absolute;width:4.693333rem;height:4.693333rem;left:2.586667rem;top:43.9%;"},
  			{message:"/static/images/home/homeloading.png",commonClass:"app-bg-cri",itemCss:"position:absolute;width:0.306667rem;height:1.346667rem;left:0.16rem;bottom:0.266667rem"},
  			{message:"/static/images/home/bolang-pink.png",commonClass:"app-bg-cri",itemCss:"position:absolute;width:1.986667rem;height:1.08rem;left:7.906667rem;bottom:0.84rem"},

  			{message:"/static/images/home/pink_6.png",commonClass:"animated bounceInLeft animationAgin",itemCss:"position:absolute;width:2.24rem;height:2.24rem;left:-0.8rem;top:28.4%;animation-delay: 0s"},
  			{message:"/static/images/home/blue_m.png",commonClass:"animated bounceInLeft animationAgin",itemCss:"position:absolute;width:1.293333rem;height:2.68rem;left:0.24rem;top:5.47%;animation-delay: 0s"},
  			{message:"/static/images/home/line_left.png",commonClass:"animated bounceInLeft animationAgin",itemCss:"position:absolute;width:1.68rem;height:1.413333rem;left:-0.4666rem;top:42.7%;animation-delay: 0.2s"},
  			{message:"/static/images/home/left2.png",commonClass:"animated bounceInLeft animationAgin",itemCss:"position:absolute;width:3.813333rem;height:3.813333rem;left:-0.9333rem;top:55.38%;animation-delay: 0.2s"},
  			{message:"/static/images/home/shadow_top.png",commonClass:"animated bounceInDown animationAgin",itemCss:"position:absolute;width:1.013333rem;height:2.026667rem;left:7.36rem;top:2.65%;animation-delay: 0.4s"},
  			{message:"/static/images/home/white_1.png",commonClass:"animated bounceInRight animationAgin",itemCss:"position:absolute;width:1.293333rem;height:1.293333rem;left:9.04rem;top:13.18%;animation-delay: 0.4s"},
  			{message:"/static/images/home/line_right.png",commonClass:"animated bounceInRight animationAgin",itemCss:"position:absolute;width:2.066667rem;height:2.08rem;left:8.32rem;top:21.17%;animation-delay:0.6s"},
  			{message:"/static/images/home/grey_2.png",commonClass:"animated bounceInRight animationAgin",itemCss:"position:absolute;width:0.853333rem;height:1.733333rem;left:9.2rem;top:69.73%;animation-delay: 0.6s"},
  			{message:"/static/images/home/shadow_bottom.png",commonClass:"animated bounceInUp animationAgin",itemCss:"position:absolute;width:1.28rem;height:2.026667rem;left:2.893333rem;top:77.94%;animation-delay:0.6s"},
  		],
  	}
  },
  methods:{
  	   isIPad(){
        var ua = navigator.userAgent.toLowerCase(); 
        if(ua.match(/iPad/i)=="ipad") { 
           return true; 
        } else { 
           return false; 
        }
      },
  }

}
</script>

<style lang="css" scoped>
	#app{width: 100%;height: 100%;position: relative;overflow-x: hidden;overflow-y: auto;}
	#app .app-bg{width: 100%;background-color: #ecf0f5;height: 100%}
	#app .app-bg .app-logo{display:block;width:3.853333rem;height: 0.346667rem;padding-top:0.266667rem;padding-left:3.026667rem}
</style>
