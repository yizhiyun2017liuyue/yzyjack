<template>
  <div id="app">
  	<div class="app-bg" :style="height">
  		<!-- logo -->
  		<img src="/static/images/logo.png" alt="logo" class="app-logo">
  		<!-- smallComponent -->
  		<img v-for="item in appimg" :src="item.message" alt="componentShow" :class='item.commonClass' :style="item.itemCss">
  		<router-view/>	
  	</div>
    
  </div>
</template>

<script>

export default {
  name:'App',
  created: function () {
      // this.$router.push('/');
      this.getHeight();
      this.screenResize(this);
 },
  data (){
  	return {
  		height:{
  			height:""
  		},
  		appimg:[
  			{message:"/static/images/pink_6.png",commonClass:"animated bounceInLeft",itemCss:"position:absolute;width:2.24rem;height:2.24rem;left:-0.6rem;top:5rem"},
  			{message:"/static/images/blue_m.png",commonClass:"animated bounceInLeft",itemCss:"position:absolute;width:1.293333rem;height:2.68rem;left:0.24rem;top:1.666667rem"},
  			{message:"/static/images/line_left.png",commonClass:"animated bounceInLeft",itemCss:"position:absolute;width:1.68rem;height:1.413333rem;left:-0.4666rem;top:6.966667rem"},
  			{message:"/static/images/left2.png",commonClass:"animated bounceInLeft",itemCss:"position:absolute;width:3.813333rem;height:3.813333rem;left:-0.9333rem;top:9.693333rem"},
  			{message:"/static/images/shadow_top.png",commonClass:"animated bounceInDown",itemCss:"position:absolute;width:1.013333rem;height:2.026667rem;left:7.36rem;top:1.266667rem"},
  			{message:"/static/images/white_1.png",commonClass:"animated bounceInRight",itemCss:"position:absolute;width:1.293333rem;height:1.293333rem;left:9.04rem;top:2.52rem"},
  			{message:"/static/images/line_right.png",commonClass:"animated bounceInRight",itemCss:"position:absolute;width:2.066667rem;height:2.08rem;left:8.32rem;top:3.3066666rem"},
  			{message:"/static/images/grey_2.png",commonClass:"animated bounceInRight",itemCss:"position:absolute;width:0.853333rem;height:1.733333rem;left:9.2rem;top:11.573333rem"},
  			{message:"/static/images/shadow_bottom.png",commonClass:"animated bounceInUp",itemCss:"position:absolute;width:1.28rem;height:2.026667rem;left:2.893333rem;top:13.56rem"},
  		]
  	}
  },
  methods:{
  	getHeight(){
  		this.height.height = Math.round($(document).width()/0.56) + "px"
  	},
  	screenResize(ele){
  		window.onresize=function(){
  			ele.height.height = Math.round($(document).width()/0.56) + "px"
  		}
  	}
  }

}
</script>

<style lang="css" scoped>
	#app{width: 100%;height: 100%;position: relative;overflow: hidden;}
	#app .app-bg{width: 100%;background: url('/static/images/bg.png') no-repeat;background-size:100% 100%;}
	#app .app-bg .app-logo{display:block;width:3.853333rem;height: 0.346667rem;padding-top: 0.666667rem;padding-left:3.026667rem}
</style>
