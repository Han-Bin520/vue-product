<template>
    <div class="recommend">
        <Banner :banners="banners"></Banner>
        <Personalized></Personalized>
    </div>
</template>

<script>
import { getBanner, getPersonalized } from '../api/index'
import Banner from '../components/Banner'
import Personalized from '../components/Personalized'

export default {
  name: 'Recommend',
  components: {
    Banner,
    Personalized
  },
  data () {
    return {
      banners: []
    }
  },
  created () {
    getBanner()
      .then((data) => {
        this.banners = data.banners
      })
      .catch(function (err) {
        console.log(err)
      })
    getPersonalized()
      .then((data) => {
        this.personalized = data.result
      })
      .catch(function (err) {
        console.log(err)
      })
  }

}
</script>

<style scoped>

</style>
