<template>
    <div class="player">
        <NormalPlayer></NormalPlayer>
        <MiniPlayer></MiniPlayer>
        <ListPlayer ref="ListPlayer"></ListPlayer>
    </div>
</template>

<script>
import NormalPlayer from '../components/Player/NormalPlayer'
import MiniPlayer from '../components/Player/MiniPlayer'
import ListPlayer from '../components/Player/ListPlayer'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  }
}
</script>

<style scoped lang="scss">

</style>
