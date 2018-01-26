<template>
    <div>
	    <img src="/static/images/logo.png">
   	    <router-link to="/infordraghandle">下一个页面</router-link>
   	    <input type="button" value="马上开启" id="btn" v-on:click="changePage">
	</div>
</template>

<script>
export default {
 	name: 'information',
  	methods:{
  		changePage(){
  			this.$router.push({name: 'infordraghandle'});
  		}
  	}
}
</script>

<style lang="css" scoped>
	@import "../assets/css/information.css"
</style>
