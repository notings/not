<template>
    <div class="game">
        <GameNav/>
        <GameApp/>
        <GameApps/>
        <GamePopu/>
    </div>
</template>

<script>
import GameNav from '../components/GameNav.vue'
import GameApp from '../components/GameApp.vue'
import GameApps from '../components/GameApps.vue'
import GamePopu from '../components/GamePopu.vue'

export default {
    components:{
        GameNav,
        GameApp,
        GameApps,
        GamePopu
    }
}
</script>