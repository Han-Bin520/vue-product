<template>
    <div id="wrapper" ref="wrapper">
        <slot></slot>

    </div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: false,
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true
    })
    // setTimeout(() => {
    //   this.iscroll.refresh()
    // }, 5000)
    const observer = new MutationObserver((mutationList, observer) => {
      this.iscroll.refresh()
    })
    const config = {
      childList: true,
      subtree: true,
      attributeFilter: ['height', 'offsetHeight']
    }
    observer.observe(this.$refs.wrapper, config)
  }
}
</script>

<style scoped>
#wrapper{
    width: 100%;
    height: 100%;
}
</style>
