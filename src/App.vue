<template>
  <div >
    <div>
      <router-view>
      </router-view>
    </div>
  </div>
</template>
<script>

import mainPage from './components/main'

export default {
  components: {
    mainPage,
  }
}
</script>
<style lang="less">
  
</style>