<!-- App.vue -->
<template>
  <div class="router_test">

		<div class="Top">
			<router-view name='top' />
		</div>

		<div id ="getheight" class="content">
      <router-view class="contentLeft" name='left'/>
      <router-view class="contentIndex" name='index'/>
      <router-view class="contentRight" name='right'/>
		</div>

		<div class="Footer">
			<router-view  name='footer' />
		</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    // 获取浏览器宽高,使得屏幕页面自适应
    getheight(){
      var ss=0;
      var w=document.documentElement.clientWidth ;//可见区域宽度
      var h=document.documentElement.clientHeight;//可见区域高度
      ss=document.getElementById('getheight');
      //需要的同学
      //ss.style.width=w+"px";
      ss.style.width=w*98%+"px";
      ss.style.height=h*0.74+"px";
    }
  },
  mounted() {
    this.getheight();
  }
}
</script>

<style>
@import './styles/index.css';
.top{
 /* width: 100%;
  height: 100px; */
  background: #42B983;
}
</style>
