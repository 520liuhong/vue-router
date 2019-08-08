import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import top from '@/views/top.vue'
import left from '@/views/left.vue'
import right from '@/views/right.vue'
import footer from '@/views/footer.vue'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      components: {
        top:top,
        left:left,
        index:index,
        right:right,
        footer:footer
      }
    }
  ]
})
