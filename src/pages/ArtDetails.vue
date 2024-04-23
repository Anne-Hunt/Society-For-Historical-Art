<script setup>
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { artService } from '../services/ArtService.js';
import Pop from '../utils/Pop.js';



const currentArt = AppState.activeArt
const route = useRoute()

async function setActiveArt(){
    try {

        const activeId = route.params.artworkId
        await artService.setActiveArt(activeId)
    } catch (error) {
        logger.log('setting active art failed', error)
        Pop.toast('Unable to get Active Art Choice', 'error')
    }

}

async function getActiveArt(){
    try {
        await artService.getActiveArt(route.params.artworkId)
    } catch (error) {
        Pop.toast('Unable to get artworks', 'error')
        logger.log(error)
    }
}
</script>


<template>

</template>


<style lang="scss" scoped>

</style>