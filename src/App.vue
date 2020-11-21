<template>
  <div >
    <div @pageid="pageget()">
      <transition>
        <router-view>
        </router-view>
      </transition>
    </div>
  </div>
</template>
<script>

import mainPage from './components/main'

export default {
  data: function() {
    return {
      
    }
  },
  components: {
    mainPage,
  },
  created() {
            this.$store.dispatch('askProfile', {
                username: 'Simooo'
            }).then(data => {
                
            })
  }
}
</script>
<style lang="less">
  
</style>