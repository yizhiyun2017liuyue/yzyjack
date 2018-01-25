<template>
  <div id="app">
  	<div class="app-bg" :style="height"></div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name:'App',
  created: function () {
      this.$router.push('/');
      this.getHeight();
      this.screenResize(this);
 },
  data (){
  	return {
  		height:{
  			height:""
  		}
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
	#app{width: 100%;height: 100%}
	#app .app-bg{width: 100%;background: url('/static/images/bg.png') no-repeat;background-size:100% 100%;min-height: 568px}
</style>
