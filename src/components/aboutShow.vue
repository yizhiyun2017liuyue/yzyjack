<template>
   <!-- 页面内容 -->
   <div class="aboutShow-small-component">
     
   </div>
</template>

<script>
export default {
  name: 'aboutShow',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    methods:{
  	ceshi:function(){
  		console.log(window.screen)
  		document.write(window.screen.height-$(document).height())
  		$("#app").css("min-height",$(document).width()/0.56)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/aboutShow.css"
</style>
